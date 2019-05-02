using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FRDInventory.Models;

namespace FRDInventory.Controllers
{
    //[Route("api/controller")]
    //[ApiController]
    public class AccountController : Controller
    {
        AccountDataAccessLayer dbAccess = new AccountDataAccessLayer();
        [HttpPost]
        [Route("api/controller/CreateUser")]
        public int CreateUser([FromBody]TblUserLogin user)
        {
           

           return  dbAccess.AddUser(user);


           

        }

        [HttpPost]
        [Route("api/controller/Login")]
        public string LoginUser([FromBody]TblUserLogin user)


        {
            string getPass = string.Empty;
            string getEmail = string.Empty;
            
            List<TblUserLogin> list = dbAccess.LoginUser(user);
            if (list.Count > 0)
            {
                foreach (var value in list)
                {
                    getPass = DbSecurity.Decrypt(value.Password, value.PasswordKey);
                    getEmail = value.EmailId;

                }

                if (getPass == user.Password)
                {


                    HttpContext.Session.SetString("EmailId", user.EmailId);
                    string status = "success";
                    return status;




                }
                else
                {

                    string status = "Wrong Password";
                    return status;
                }
            }
            else
            {
                string status = "wrong emailid or password";
                return status;

            }
            


        }



        [HttpGet]
        [Route("api/controller/BindUserGrid")]
        public List<GetUserData> BindUserGrid()
        {
            return dbAccess.BindGrid();

        }

    }
}