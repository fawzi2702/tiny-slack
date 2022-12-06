interface ResponseDetails {
  readonly status: number
  readonly message: string
}

export enum ResponseError {
  NOT_FOUND = 'not_found',
  INTERNAL_ERROR = 'internal_error',
  UNAUTHORIZED = 'unauthorized',
  BAD_REQUEST = 'bad_request',
  FORBIDDEN = 'forbidden',
}

interface Responses {
  readonly success: ResponseDetails
  readonly error: Record<ResponseError, ResponseDetails>
}

export const responses: Responses = {
  success: {
    status: 200,
    message: null,
  },
  error: {
    not_found: {
      status: 404,
      message: 'not_found',
    },
    internal_error: {
      status: 500,
      message: 'internal_error',
    },
    unauthorized: {
      status: 401,
      message: 'unauthorized',
    },
    bad_request: {
      status: 400,
      message: 'bad_request',
    },
    forbidden: {
      status: 403,
      message: 'forbidden',
    },
  },
}
