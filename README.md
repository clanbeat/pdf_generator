#Pdf Generator

Generate invoices on demand with a HTTP request.

## API

```
POST /v1/invoice
Content-Type: application/json
```

Request body should be invoice data that will be added to pdf
```json
{
    "id": 1,
    "projectId": 1,
    "quantity": 2,
    "totalAmount": 10,
    "planId": "no_trial_daily",
    "attempts": 0,
    "periodStart": "2016-04-25T08:20:20Z",
    "periodEnd": "2016-04-26T08:20:20Z",
    "lastFailedAt": null,
    "paidAt": "2016-04-26T14:36:41.111059Z",
    "createdAt": "2016-04-26T14:22:25.595678Z",
    "updatedAt": "2016-04-26T14:36:41.119871Z"
  }
```
