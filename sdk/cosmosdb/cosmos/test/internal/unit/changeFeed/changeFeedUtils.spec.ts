// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import assert from "assert";
import {
  checkEpkHeaders,
  checkTokenEmptyOrWhiteSpace,
  fetchStartTime,
} from "../../../../src/client/ChangeFeed/changeFeedUtils";
import { ChangeFeedStartFrom, PartitionKeyRange } from "../../../../src/";
import { EpkRange } from "../../../../src/client/ChangeFeed/EpkRange";
import { isEpkRange } from "../../../../src/client/ChangeFeed/changeFeedUtils";
import { QueryRange } from "../../../../src/routing";

describe("test checkEpkHeaders", function () {
  it("exact overlap", async function () {
    const overLappingRange: PartitionKeyRange = {
      id: "2",
      minInclusive: "05C1D5AB55AB50",
      maxExclusive: "05C1DFFFFFFFF8",
      ridPrefix: 2,
      throughputFraction: 0.16666666666666666,
      status: "online",
      parents: [],
    };

    const pkRange = new QueryRange("05C1D5AB55AB50", "05C1DFFFFFFFF8", true, false);
    const [epkMinHeader, epkMaxHeader] = await checkEpkHeaders(pkRange, overLappingRange);

    assert.equal(epkMinHeader, undefined);
    assert.equal(epkMaxHeader, undefined);
  });

  it("complete overlap, pkRange exceeds overlappingRange", async function () {
    const overLappingRange: PartitionKeyRange = {
      id: "2",
      minInclusive: "05C1D5AB55AB50",
      maxExclusive: "05C1DFFFFFFFF8",
      ridPrefix: 2,
      throughputFraction: 0.16666666666666666,
      status: "online",
      parents: [],
    };

    const pkRange = new QueryRange("05C1C5AB55AB50", "05C1E5AB55AB50", true, false);

    const [epkMinHeader, epkMaxHeader] = await checkEpkHeaders(pkRange, overLappingRange);

    assert.equal(epkMinHeader, undefined);
    assert.equal(epkMaxHeader, undefined);
  });

  it("overlapping range left side overlap", async function () {
    const overLappingRange: PartitionKeyRange = {
      id: "2",
      minInclusive: "05C1D5AB55AB50",
      maxExclusive: "05C1DFFFFFFFF8",
      ridPrefix: 2,
      throughputFraction: 0.16666666666666666,
      status: "online",
      parents: [],
    };

    const pkRange = new QueryRange("05C1C5AB55AB50", "05C1DFFFFFFFF7", true, false);

    const [epkMinHeader, epkMaxHeader] = await checkEpkHeaders(pkRange, overLappingRange);

    assert.equal(epkMinHeader, "05C1D5AB55AB50");
    assert.equal(epkMaxHeader, "05C1DFFFFFFFF7");
  });

  it("overlapping range right side overlap", async function () {
    const overLappingRange: PartitionKeyRange = {
      id: "2",
      minInclusive: "05C1D5AB55AB50",
      maxExclusive: "05C1DFFFFFFFF8",
      ridPrefix: 2,
      throughputFraction: 0.16666666666666666,
      status: "online",
      parents: [],
    };

    const pkRange = new QueryRange("05C1D5AB55AB51", "05C1DFFFFFFFF9", true, false);
    const [epkMinHeader, epkMaxHeader] = await checkEpkHeaders(pkRange, overLappingRange);

    assert.equal(epkMinHeader, "05C1D5AB55AB51");
    assert.equal(epkMaxHeader, "05C1DFFFFFFFF8");
  });

  it("pkrange is less than overlapping range on both sides", async function () {
    const overLappingRange: PartitionKeyRange = {
      id: "2",
      minInclusive: "05C1D5AB55AB50",
      maxExclusive: "05C1DFFFFFFFF8",
      ridPrefix: 2,
      throughputFraction: 0.16666666666666666,
      status: "online",
      parents: [],
    };

    const pkRange = new QueryRange("05C1D5AB55AB51", "05C1DFFFFFFFF7", true, false);
    const [epkMinHeader, epkMaxHeader] = await checkEpkHeaders(pkRange, overLappingRange);

    assert.equal(epkMinHeader, "05C1D5AB55AB51");
    assert.equal(epkMaxHeader, "05C1DFFFFFFFF7");
  });
});

describe("test isEpkRange", function () {
  it("maxExclusive > 'FF'", async function () {
    const epkRange: EpkRange = {
      minInclusive: "",
      maxExclusive: "GG",
    };
    const result = await isEpkRange(epkRange);
    assert.equal(result, false);
  });
  it("minInclusive > maxExclusive", async function () {
    const epkRange: EpkRange = {
      minInclusive: "05C1DFFFFFFFF8",
      maxExclusive: "05C1D5AB55AB50",
    };
    const result = isEpkRange(epkRange);
    assert.equal(result, false);
  });

  it("minInclusive = maxExclusive", async function () {
    const epkRange: EpkRange = {
      minInclusive: "05C1D5AB55AB51",
      maxExclusive: "05C1D5AB55AB51",
    };
    const result = isEpkRange(epkRange);
    assert.equal(result, false);
  });

  it("minInclusive = '' and maxExclusive = 'FF'", async function () {
    const epkRange: EpkRange = {
      minInclusive: "",
      maxExclusive: "FF",
    };
    const result = isEpkRange(epkRange);
    assert.equal(result, true);
  });

  it("minInclusive > '' and maxExclusive < 'FF'", async function () {
    const epkRange: EpkRange = {
      minInclusive: "05C1D5AB55AB50",
      maxExclusive: "05C1DFFFFFFFF8",
    };
    const result = isEpkRange(epkRange);
    assert.equal(result, true);
  });
});

describe("test checkTokenEmptyOrWhiteSpace", function () {
  it("empty continuation token", function () {
    const result = checkTokenEmptyOrWhiteSpace("");
    assert.equal(result, true);
  });
  it("white space", function () {
    const result = checkTokenEmptyOrWhiteSpace("    ");
    assert.equal(result, true);
  });
  it("non empty", function () {
    const result = checkTokenEmptyOrWhiteSpace("{}");
    assert.equal(result, false);
  });
});

describe("test fetchStartTime", function () {
  it("startTime is beginning", function () {
    const startTime = fetchStartTime(ChangeFeedStartFrom.Beginning());
    assert.equal(startTime, undefined);
  });
  it("startTime is now", function () {
    const startTime = fetchStartTime(ChangeFeedStartFrom.Now());
    assert.equal(startTime instanceof Date, true);
  });
  it("startTime is time", function () {
    const time = new Date();
    const startTime = fetchStartTime(ChangeFeedStartFrom.Time(time));
    assert.equal(startTime, time);
  });
});
