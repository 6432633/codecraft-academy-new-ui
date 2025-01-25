
const PaymentProcessor = async (data) => {
    const authEndpoint = 'https://api-merchant.test.paynet.md/auth'
    const sendPaymentEndpoint = 'https://api-merchant.test.paynet.md/api/Payments/Send'
    const redirectEndpoint = '/acquiring/getecom'
    const username = '950615'
    const password = 'xtJ3ScJ9'
    const merchantCode = '894755'
    const saleArea = 'https_www_code-craft_academy'
    const signature = '4E321B9B-3C86-4D02-B1C7-AF7291841384'
    const formData = new URLSearchParams();
    formData.append('grant_type', 'password'); // Replace with your grant type if different
    formData.append('username', username);
    formData.append('password', password);
    formData.append('merchantcode', merchantCode);

    try {
        const response = await fetch(authEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const res = await response.json();
        const token = res.access_token;
        console.log(`The token is ${token}`);
        //start 
        const date = new Date();
        const paymentDate = new Date(date.getTime() + 120 * 60 * 1000).toISOString().substring(0, 19);
        const expiryDate = new Date(date.getTime() + 180 * 60 * 1000).toISOString().substring(0, 19);
        const invoice = Date.now();
        const requestBody = {
            "Invoice": invoice,
            "MerchantCode": "894755",
            "LinkUrlSuccess": "http://code-craft.academy/#/payment-callback?status=success&transaction_id=1738338453449&amount=50&course_id=1",
            "LinkUrlCancel": "http://code-craft.academy/#/payment-callback?status=failed",
            "Signature": signature,
            "SignVersion": "v05",
            "Customer": {
                "Code": "email@example.md",
                "Name": `${data.firstName} ${data.lastName}`,
                "NameFirst": data.firstName,
                "NameLast": data.lastName,
                "email": data.email,
                "Country": data.country,
                "City": data.city,
                "Address": data.address,
                "PhoneNumber": data.phone
            },
            "Payer": null,
            "Currency": 498,
            "ExternalDate": paymentDate,
            "ExpiryDate": expiryDate,
            "Services": [
                {
                    "Name": data.courseName,
                    "Description": data.courseName,
                    "Amount": Math.round(parseFloat(data.price) * 100),
                    "Products": [
                        {
                            "GroupName": null,
                            "QualitiesConcat": null,
                            "LineNo": 1,
                            "GroupId": null,
                            "Code": "",
                            "Barcode": null,
                            "Name": "Course",
                            "Description": data.courseName,
                            "UnitPrice": data.price * 100,
                            "UnitProduct": 1,
                            "Quantity": 100,
                            "Amount": Math.round(parseFloat(data.price) * 100),
                            "Dimensions": null,
                            "Qualities": null,
                            "TotalAmount": Math.round(parseFloat(data.price) * 100)
                        }
                    ]
                }
            ],
            "MoneyType": {
                "Code": "PAYNET"
            }
        };
        console.log(JSON.stringify(requestBody))
        let payment = '';
        try {
            const paymentResponse = await fetch(sendPaymentEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token.toString()
                },
                body: JSON.stringify(requestBody),
            });

            if (!paymentResponse.ok) {
                throw new Error('Network response was not ok');
            }

            payment = await paymentResponse.json();
            console.log('Success:', payment);
            var paymentId = payment.PaymentId;
            const receivedSignature = payment.Signature;
            console.log(paymentId)
            console.log(signature)
            var d = expiryDate
            var key = receivedSignature
            var urlSuccess = `http://code-craft.academy/#/payment-callback?status=success&transaction_id=${invoice}&amount=${data.price}&course_id=${data.courseName}`
            var urlFailed = 'http://code-craft.academy/#/payment-callback?status=failed'
            /*  const formDataRedirect = new URLSearchParams();
              formDataRedirect.append('operation', paymentId); // Replace with your grant type if different
              formDataRedirect.append('LinkUrlSucces', `LinkUrlSucces:http://code-craft.academy/#/payment-callback?status=success&transaction_id=${invoice}&amount=${data.price}&course_id=${data.courseName}`);
              formDataRedirect.append('LinkUrlCancel', 'http://code-craft.academy/#/payment-callback?status=failed');
              formDataRedirect.append('ExpiryDate', expiryDate);
              formDataRedirect.append('Signature', receivedSignature);
              formDataRedirect.append('Lang', 'ru');
              try {
                  const r = await fetch(redirectEndpoint, {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/x-www-form-urlencoded'
                      },
                      body: formDataRedirect,
                  });
  
                  if (!r.ok) {
                      throw new Error('Network response was not ok');
                  }
                  page = r;
                  console.log(r)
              } catch (error) {
                  console.error('Error:', error);
              }*/


        } catch (error) {
            console.error('Error:', error);
        }
    } catch (error) {
        console.log(error)
    }

    const p = {id: paymentId, date: d, key: key, success: urlSuccess, failed: urlFailed}
    
    return  p;
}
export default PaymentProcessor