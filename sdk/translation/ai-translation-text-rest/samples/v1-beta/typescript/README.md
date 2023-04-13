---
page_type: sample
languages:
  - typescript
products:
  - azure
  - azure-cognitive-services
  - azure-translator
urlFragment: ai-translation-text-typescript-beta
---

# Azure Text Translation Service client library samples for TypeScript (Beta)

These sample programs show how to use the TypeScript client libraries for Azure Text Translation Service in some common scenarios.

| **File Name**                                                       | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [breakSentence.ts][breaksentence]                                   | This sample demonstrates how to make a simple call to the Azure Text Translator service to get sentences' boundaries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [breakSentenceWithAutoDetection.ts][breaksentencewithautodetection] | This sample demonstrates how to make a simple call to the Azure Text Translator service to get sentences' boundaries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [dictionaryExamples.ts][dictionaryexamples]                         | This sample demonstrates how to make a simple call to the Azure Text Translator service to get grammatical structure and context examples for the source term and target term pair.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [dictionaryLookup.ts][dictionarylookup]                             | This sample demonstrates how to make a simple call to the Azure Text Translator service to get equivalent words for the source term in the target language.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [getLanguages.ts][getlanguages]                                     | This sample demonstrates how to make a simple call to the Azure Text Translator service to get a list of supported languages                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [getLanguagesAcceptLanguage.ts][getlanguagesacceptlanguage]         | This sample demonstrates how you can select the language to use for user interface strings. Some of the fields in the response are names of languages or names of regions. Use this parameter to define the language in which these names are returned. The language is specified by providing a well-formed BCP 47 language tag. For instance, use the value `fr` to request names in French or use the value `zh-Hant` to request names in Chinese Traditional. Names are provided in the English language when a target language is not specified or when localization is not available.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [getLanguagesScope.ts][getlanguagesscope]                           | This sample demonstrates how to make a simple call to the Azure Text Translator service to get a list of supported languages for a selected scope                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [translate.ts][translate]                                           | This sample demonstrates how to make a simple call to the Azure Text Translator service to get translation for a text which language is know to a target language.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [translateAlignments.ts][translatealignments]                       | This sample demonstrates how you can ask translation service to include alignment projection from source text to translated text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [translateCustom.ts][translatecustom]                               | This sample demonstrates how You can get translations from a customized system built with Custom Translator (https://learn.microsoft.com/azure/cognitive-services/translator/customization). Add the Category ID from your Custom Translator [project details](https://learn.microsoft.com/azure/cognitive-services/translator/custom-translator/how-to-create-project#view-project-details) to this parameter to use your deployed customized system. It is possible to set `allowFalback` paramter. It specifies that the service is allowed to fall back to a general system when a custom system doesn't exist. Possible values are: `true` (default) or `false`. `allowFallback=false` specifies that the translation should only use systems trained for the category specified by the request. If a translation for language X to language Y requires chaining through a pivot language E, then all the systems in the chain (X → E and E → Y) will need to be custom and have the same category. If no system is found with the specific category, the request will return a 400 status code. `allowFallback=true` specifies that the service is allowed to fall back to a general system when a custom system doesn't exist. |
| [translateDetection.ts][translatedetection]                         | This sample demonstrates how to make a simple call to the Azure Text Translator service to get translation without specifying the source language to a target language.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [translateDictionary.ts][translatedictionary]                       | This sample demonstrates how to keep words if you already know the translation you want to apply to a word or a phrase, you can supply it as markup within the request. The dynamic dictionary is safe only for compound nouns like proper names and product names. Note You must include the From parameter in your API translation request instead of using the autodetect feature.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [translateMultipleSources.ts][translatemultiplesources]             | This sample demonstrates how to make a simple call to the Azure Text Translator service to get translation for a multiple text fields and each input text is in different language.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [translateMultipleTargets.ts][translatemultipletargets]             | This sample demonstrates how you can provide multiple target languages which results to each input element be translated to all target languages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [translateNoTranslate.ts][translatenotranslate]                     | This sample demonstrates how it's sometimes useful to exclude specific content from translation. You can use the attribute class=notranslate to specify content that should remain in its original language. In the following example, the content inside the first div element won't be translated, while the content in the second div element will be translated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [translateProfanity.ts][translateprofanity]                         | This sample demonstrates how to change the profanity handling during translate call. Normally the Translator service will retain profanity that is present in the source in the translation. The degree of profanity and the context that makes words profane differ between cultures, and as a result the degree of profanity in the target language may be amplified or reduced. If you want to avoid getting profanity in the translation, regardless of the presence of profanity in the source text, you can use the profanity filtering option. The option allows you to choose whether you want to see profanity deleted, whether you want to mark profanities with appropriate tags (giving you the option to add your own post-processing), or you want no action taken. The accepted values of `ProfanityAction` are `Deleted`, `Marked` and `NoAction` (default).                                                                                                                                                                                                                                                                                                                                                          |
| [translateSenteceLength.ts][translatesentecelength]                 | This sample demonstrates how to you can ask translator service to include sentence boundaries for the input text and the translated text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [translateTextType.ts][translatetexttype]                           | This sample demonstrates how you can select whether the translated text is plain text or HTML text. Any HTML needs to be a well-formed, complete element. Possible values are: plain (default) or html.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [translateWithTransliteration.ts][translatewithtransliteration]     | You can combine both Translation and Transliteration in one Translate call. Your source Text can be in non-standard Script of a language as well as you can ask for non-standard Script of a target language.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [transliterate.ts][transliterate]                                   | This sample demonstrates how to make a simple call to the Azure Text Translator service to convert characters or letters of a source language to the corresponding characters or letters of a target language.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] and the following Azure resources to run these sample programs:

- [Translator resource instance][createinstance_translatorresourceinstance]

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/breakSentence.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env ENDPOINT="<endpoint>" TEXT_TRANSLATOR_API_KEY="<text translator api key>" TEXT_TRANSLATOR_REGION="<text translator region>" node dist/breakSentence.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[breaksentence]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/breakSentence.ts
[breaksentencewithautodetection]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/breakSentenceWithAutoDetection.ts
[dictionaryexamples]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/dictionaryExamples.ts
[dictionarylookup]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/dictionaryLookup.ts
[getlanguages]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/getLanguages.ts
[getlanguagesacceptlanguage]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/getLanguagesAcceptLanguage.ts
[getlanguagesscope]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/getLanguagesScope.ts
[translate]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translate.ts
[translatealignments]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translateAlignments.ts
[translatecustom]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translateCustom.ts
[translatedetection]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translateDetection.ts
[translatedictionary]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translateDictionary.ts
[translatemultiplesources]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translateMultipleSources.ts
[translatemultipletargets]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translateMultipleTargets.ts
[translatenotranslate]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translateNoTranslate.ts
[translateprofanity]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translateProfanity.ts
[translatesentecelength]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translateSenteceLength.ts
[translatetexttype]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translateTextType.ts
[translatewithtransliteration]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/translateWithTransliteration.ts
[transliterate]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/translation/ai-translation-text-rest/samples/v1-beta/typescript/src/transliterate.ts
[apiref]: https://learn.microsoft.com/azure/cognitive-services/translator/translator-text-apis
[freesub]: https://azure.microsoft.com/free/
[createinstance_translatorresourceinstance]: https://learn.microsoft.com/azure/cognitive-services/Translator/create-translator-resource
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/translation/ai-translation-text-rest/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html