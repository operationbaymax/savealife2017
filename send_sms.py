from twilio.rest import Client

# Your Account SID from twilio.com/console
account_sid = "AC1f72fded75f082ee416542f3648a4075"
# Your Auth Token from twilio.com/console
auth_token  = "5b3675fd3f8e9577093237a785946127"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+12538885523",
    from_="+12243477633",
    body="Hello from Python!")

print(message.sid)
