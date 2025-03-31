export const MAX_STEP = 3;
export type Step = 1 | 2 | 3;

export interface BookCourFilterValue {
  courstType: string[];
  times: number[];
  surfaces: string[];
}
export const bookCourFilterInitValue: BookCourFilterValue = {
  courstType: [],
  times: [],
  surfaces: [],
};
