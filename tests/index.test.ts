import {toBool} from "../src"

describe('toBool()', () => {
    it("value: 0 and except value: 0 should true", () => {
      expect(toBool(0, 0)).toBeTruthy();
    })

    it("value: NaN and except value: NaN should true", () => {
      expect(toBool(NaN, NaN)).toBeTruthy();
    })

    it("value: false and except value: false should true", () => {
      expect(toBool(false, false)).toBeTruthy();
    })

    it("value: null and except value: null should true", () => {
      expect(toBool(null, null)).toBeTruthy();
    })

    it("value: undefined and except value: undefined should true", () => {
      expect(toBool(undefined, undefined)).toBeTruthy();
    })

    it("value: -0 and except value: -0 should true", () => {
      expect(toBool(-0, -0)).toBeTruthy();
    })

    it("value: \"\" and except value: \"\" should true", () => {
      expect(toBool("", "")).toBeTruthy();
    })

    it("value: '' and except value: '' should true", () => {
      expect(toBool('', '')).toBeTruthy();
    })

    it("value: `` and except value: `` should true", () => {
      expect(toBool(``, ``)).toBeTruthy();
    })

    it("value: 1 and except value: 0 should true", () => {
      expect(toBool(1, 0)).toBeTruthy();
    })

    it("value: NaN and except value: 0 should false", () => {
      expect(toBool(NaN, 0)).toBeFalsy();
    })

    it("value: 0 and except value: false should false", () => {
      expect(toBool(0, false)).toBeFalsy();
    })

    it("value: undefined and except value: null should false", () => {
      expect(toBool(undefined, null)).toBeFalsy();
    })

    it("value: \"\" and except value: `` should true because \"\" === `` true", () => {
      expect(toBool("", ``)).toBeTruthy();
    })

    it("value: -0 and except value: '' should false", () => {
      expect(toBool(-0, '')).toBeFalsy();
    })

    it("value: true and except value: 0 should false", () => {
      expect(toBool(true, 0)).toBeTruthy();
    })
})
