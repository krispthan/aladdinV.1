import React from "react";
import { render } from "@testing-library/react";

import AladdinMultiSelector from "./aladdin-multiselector";

describe("AladdinMultiSelector", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AladdinMultiSelector />);
    expect(baseElement).toBeTruthy();
  });
});
