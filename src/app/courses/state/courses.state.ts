import { Course } from "src/models/course.model"

export interface CoursesState {
  courses: Course[]
}

export const InitialState: CoursesState = {
  courses: []
}