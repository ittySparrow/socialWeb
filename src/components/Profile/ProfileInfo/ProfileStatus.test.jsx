import TestRenderer from "react-test-renderer";
import React from "react";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = TestRenderer.create(
      <ProfileStatus status="it-kamasutra.com" />
    );
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra.com");
  });
  test("after creation span should be displayed", () => {
    const component = TestRenderer.create(
      <ProfileStatus status="it-kamasutra.com" />
    );
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation input shouldn't be displayed", () => {
    const component = TestRenderer.create(
      <ProfileStatus status="it-kamasutra.com" />
    );
    const instance = component.root;
    expect(() => {
      instance.findByType("input");
    }).toThrow();
  });
  test("after creation span should show correct text from props", () => {
    const component = TestRenderer.create(
      <ProfileStatus status="it-kamasutra.com" />
    );
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra.com");
  });
  test("input should be displayed in EditMode instead of span", () => {
    const component = TestRenderer.create(
      <ProfileStatus status="it-kamasutra.com" />
    );
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    const input = instance.findByType("input");
    expect(input.props.value).toBe("it-kamasutra.com");
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = TestRenderer.create(
      <ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
