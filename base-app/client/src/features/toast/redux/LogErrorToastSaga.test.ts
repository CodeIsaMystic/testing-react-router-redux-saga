import { expectSaga } from "redux-saga-test-plan"

import { ToastOptions } from "../types"
import { logErrorToasts, logErrorToast } from "./LogErrorToastSaga"

const errorToastOptions: ToastOptions = {
  title: "it's time to panic!!!",
  status: "error",
}

const errorToastAction = {
  type: "test",
  payload: errorToastOptions,
}

test("saga calls logErrorToast when we receive an Error Toast", () => {
  return expectSaga(logErrorToasts, errorToastAction)
    .call(logErrorToast, "it's time to panic!!!")
    .run()
})

const infoToastOptions: ToastOptions = {
  title: "it's not time to panic",
  status: "info",
}

const infoToastAction = {
  type: "test",
  payload: infoToastOptions,
}

test("saga does not calls logErrorToast when we receive an Info Toast", () => {
  return expectSaga(logErrorToasts, infoToastAction)
    .not.call.fn(logErrorToast)
    .run()
})
