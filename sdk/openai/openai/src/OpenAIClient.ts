// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TokenCredential,
  AzureKeyCredential,
  KeyCredential,
  isTokenCredential,
} from "@azure/core-auth";
import { ClientOptions } from "./common/interfaces.js";
import {
  DeploymentEmbeddingsOptionsEmbeddings,
  DeploymentCompletionsOptionsCompletions,
  DeploymentChatCompletionsOptionsChatCompletions,
  ChatMessage,
  createOpenAI,
  OpenAIContext,
  getEmbeddings,
  getCompletions,
  getChatCompletions,
  GetEmbeddingsOptions,
  GetCompletionsOptions,
  GetChatCompletionsOptions,
} from "./api/index.js";

export class OpenAIClient {
  private _client: OpenAIContext;
  private _isAzure = false;

  /** Azure OpenAI APIs for completions and search */
  constructor(openAiKey: string, options?: ClientOptions);
  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options?: ClientOptions
  );
  constructor(
    endpointOrOpenAiKey: string,
    credOrOptions: KeyCredential | TokenCredential | ClientOptions = {},
    options: ClientOptions = {}
  ) {
    let opts: ClientOptions;
    let endpoint: string;
    let cred: KeyCredential | TokenCredential;
    if (isCred(credOrOptions)) {
      endpoint = endpointOrOpenAiKey;
      cred = credOrOptions;
      opts = options;
      this._isAzure = true;
    } else {
      endpoint = createOpenAIEndpoint(1);
      cred = new AzureKeyCredential(
        endpointOrOpenAiKey.startsWith("Bearer ")
          ? endpointOrOpenAiKey
          : `Bearer ${endpointOrOpenAiKey}`
      );
      const { credentials, ...restOpts } = credOrOptions;
      opts = {
        credentials: {
          apiKeyHeaderName: credentials?.apiKeyHeaderName ?? "Authorization",
          scopes: credentials?.scopes,
        },
        ...restOpts,
      };
    }

    this._client = createOpenAI(endpoint, cred, {
      ...opts,
      ...(this._isAzure
        ? {}
        : {
            additionalPolicies: [
              ...(opts.additionalPolicies ?? []),
              {
                position: "perCall",
                policy: {
                  name: "openAiEndpoint",
                  sendRequest: (request, next) => {
                    const obj = new URL(request.url);
                    const parts = obj.pathname.split("/");
                    obj.pathname = `/${parts[1]}/${parts[parts.length - 1]}`;
                    obj.searchParams.delete("api-version");
                    request.url = obj.toString();
                    return next(request);
                  },
                },
              },
            ],
          }),
    });
  }

  getEmbeddings(
    deploymentOrModelName: string,
    input: string,
    options?: GetEmbeddingsOptions
  ): Promise<DeploymentEmbeddingsOptionsEmbeddings>;
  getEmbeddings(
    deploymentOrModelName: string,
    input: string[],
    options?: GetEmbeddingsOptions
  ): Promise<DeploymentEmbeddingsOptionsEmbeddings>;
  getEmbeddings(
    deploymentOrModelName: string,
    input: string | string[],
    options: GetEmbeddingsOptions = { requestOptions: {} }
  ): Promise<DeploymentEmbeddingsOptionsEmbeddings> {
    this.setModel(deploymentOrModelName, options);
    return getEmbeddings(this._client, input, deploymentOrModelName, options);
  }

  getChatCompletions(
    deploymentOrModelName: string,
    messages: ChatMessage[],
    options: GetChatCompletionsOptions = { requestOptions: {} }
  ): Promise<DeploymentChatCompletionsOptionsChatCompletions> {
    this.setModel(deploymentOrModelName, options);
    return getChatCompletions(this._client, messages, deploymentOrModelName, options);
  }

  getCompletions(
    deploymentOrModelName: string,
    prompt: string,
    options?: GetCompletionsOptions
  ): Promise<DeploymentCompletionsOptionsCompletions>;
  getCompletions(
    deploymentOrModelName: string,
    prompt: string[],
    options?: GetCompletionsOptions
  ): Promise<DeploymentCompletionsOptionsCompletions>;
  getCompletions(
    deploymentOrModelName: string,
    options?: GetCompletionsOptions
  ): Promise<DeploymentCompletionsOptionsCompletions>;
  getCompletions(
    deploymentOrModelName: string,
    promptOrOptions?: string | string[] | GetCompletionsOptions,
    options: GetCompletionsOptions = { requestOptions: {} }
  ): Promise<DeploymentCompletionsOptionsCompletions> {
    this.setModel(deploymentOrModelName, options);
    return getCompletions(this._client, deploymentOrModelName, promptOrOptions as any, options);
  }

  private setModel(model: string, options: { model?: string }): void {
    if (!this._isAzure) {
      options.model = model;
    }
  }
}

function createOpenAIEndpoint(version: number): string {
  return `https://api.openai.com/v${version}`;
}

function isCred(cred: Record<string, any>): cred is TokenCredential | KeyCredential {
  return isTokenCredential(cred) || cred.key !== undefined;
}
