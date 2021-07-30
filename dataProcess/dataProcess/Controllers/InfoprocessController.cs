using System;
using Microsoft.AspNetCore.Mvc;
using MailKit.Net.Smtp;
using MimeKit;
using Microsoft.Extensions.Configuration;

namespace dataProcess.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InfoprocessController : Controller
    {
        private readonly IConfiguration _config;
        private readonly Random _random = new Random();
        private const int Min = 100000;
        private const int Max = 999999;
        private const string EmailSender = "vincent.diaoli@gmail.com";

        public InfoprocessController(IConfiguration config)
        {
            _config = config;
        }
        private int genVerificationCode()
        {
            return _random.Next(Min, Max);
        }

        [HttpPost]
        public void Post(EmailInfoModule es)
        {
            MimeMessage msg = new MimeMessage();
            msg.From.Add(new MailboxAddress("", EmailSender));
            msg.To.Add(MailboxAddress.Parse(es.email));
            msg.Subject = "Email Verification Code";
            msg.Body = new TextPart("html") {
                Text = "<p>Hi " + 
                        es.email + 
                        "</p>" +
                        "<p>The verification code is: " + 
                        genVerificationCode().ToString() + 
                        "</p>"
            };

            SmtpClient smtp = new SmtpClient();
            try
            {
                smtp.Connect("smtp.gmail.com", 465, true);
                smtp.Authenticate("vincent.diaoli@gmail.com", "DiaoLi-1129");
                smtp.Send(msg);

                Console.WriteLine("sent ok");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                smtp.Disconnect(true);
                smtp.Dispose();
            }

            Console.ReadLine();
        }

        [HttpPost("{id}")]
        public void Post(BasicInfoModule info)
        {
            GlobalConfig.Connection.CreateBasicInfo(info, _config.GetConnectionString("Connection"));
        }
    }
}
