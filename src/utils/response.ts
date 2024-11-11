import { NextApiResponse } from 'next';

export function response(
    res: NextApiResponse,
    statusCode: number,
    message: string | string[] | Record<string, any>,
    data: any = null
) {
    const isError = statusCode >= 400;
    const errorMessage = isError ? getDefaultErrorMessage(statusCode) : undefined;

    const responseBody: any = {
        statusCode,
    };

    if (isError) {
        responseBody.error = errorMessage;
    }

    if (message !== undefined) {
        responseBody.message = message;
    }

    if (!isError && data !== null) {
        responseBody.data = data;
    }
    try {
        JSON.stringify(responseBody);
    } catch (serializationError) {
        console.error('Serialization error:', serializationError);
        return res.status(500).json({
            statusCode: 500,
            error: 'Internal Server Error',
            message: 'An error occurred while processing your request.',
        });
    }

    return res.status(statusCode).json(responseBody);
}

function getDefaultErrorMessage(statusCode: number): string {
    switch (statusCode) {
        case 400:
            return 'Bad Request';
        case 401:
            return 'Unauthorized';
        case 403:
            return 'Forbidden';
        case 404:
            return 'Not Found';
        case 422:
            return 'Unprocessable Entity';
        case 500:
            return 'Internal Server Error';
        default:
            return 'Error';
    }
}
