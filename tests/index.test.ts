import { toBool } from '../src';

describe('toBool()', () => {
  describe('when value equals to 0 and expected value equals to 0', () => {
    it('returns true ', () => {
      expect(toBool(0, 0)).toBeTruthy();
    });
  });

  describe('when value equals to NaN and expected value equals to NaN', () => {
    it('returns true ', () => {
      expect(toBool(NaN, NaN)).toBeTruthy();
    });
  });

  describe('when value equals to false and expected value equals to false', () => {
    it('returns true ', () => {
      expect(toBool(false, false)).toBeTruthy();
    });
  });

  describe('when value equals to null and expected value equals to null', () => {
    it('returns true ', () => {
      expect(toBool(null, null)).toBeTruthy();
    });
  });

  describe('when value equals to undefined and expected value equals to undefined', () => {
    it('returns true ', () => {
      expect(toBool(undefined, undefined)).toBeTruthy();
    });
  });

  describe('when value equals to negative 0 and expected value equals to negative 0', () => {
    it('returns true ', () => {
      expect(toBool(-0, -0)).toBeTruthy();
    });
  });

  describe('when value equals to empty string and expected value equals to empty string', () => {
    it('returns true ', () => {
      expect(toBool('', '')).toBeTruthy();
    });
  });

  describe('when value equals to back tick and expected value equals to back tick', () => {
    it('returns true ', () => {
      expect(toBool(``, ``)).toBeTruthy();
    });
  });

  describe('when value equals to 1 and expected value equals to 0', () => {
    it('returns true ', () => {
      expect(toBool(1, 0)).toBeTruthy();
    });
  });

  describe('when value equals to NaN and expected value equals to 0', () => {
    it('returns false ', () => {
      expect(toBool(NaN, 0)).toBeFalsy();
    });
  });

  describe('when value equals to 0 and expected value equals to false', () => {
    it('returns false ', () => {
      expect(toBool(0, false)).toBeFalsy();
    });
  });

  describe('when value equals to undefined and expected value equals to null', () => {
    it('returns false ', () => {
      expect(toBool(undefined, null)).toBeFalsy();
    });
  });

  describe('when value equals to empty string and expected value equals to back tick', () => {
    it('returns true ', () => {
      expect(toBool('', ``)).toBeTruthy();
    });
  });

  describe('when value equals to negative 0 and expected value equals to empty string', () => {
    it('returns false ', () => {
      expect(toBool(-0, '')).toBeFalsy();
    });
  });

  describe('when value equals to true and expected value equals to 0', () => {
    it('returns false ', () => {
      expect(toBool(true, 0)).toBeTruthy();
    });
  });
});
