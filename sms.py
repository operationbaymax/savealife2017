from twilio.twiml.messaging_response import Body, Message, Redirect, MessagingResponse
#
# response = MessagingResponse()
# message = Message()
# message.body('Hello World!')
# response.append(message)
# response.redirect('https://demo.twilio.com/sms/welcome')
#
# print(response)

response = MessagingResponse()
response.message('This is message 1 of 2.')
response.message('This is message 2 of 2.')

print(response)
