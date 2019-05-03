using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;
using FRDInventory.Models;
using System.Data;
using Microsoft.AspNetCore.Http;


namespace FRDInventory.Models
{
    public class AccountDataAccessLayer
    {
        FRDInventoryContext db = new FRDInventoryContext();



        public int AddUser(TblUserLogin user)
        {
            
            try
            {
              

                    string pass = string.Empty;
                    string pwdKey = string.Empty;
                    if (user.Password.Trim() != "")
                    {

                        pass = DbSecurity.Encrypt(user.Password, ref pwdKey);
                    }

                if (Convert.ToBoolean(user.StorePicker) == true)
                {
                    user.StorePicker = "1";
                }
                else {
                    user.StorePicker = " ";
                }
                    if (Convert.ToBoolean(user.InventoryController) == true)
                    {
                        user.InventoryController = "1";
                    }
                else
                {
                    user.InventoryController = " ";
                }
                   
                    db.Database.ExecuteSqlCommand(@"Sp_DeviceUser @QueryType,@UserName,@EmailId,@Password,@PasswordKey, @UserPin,@StorePicker,@Controller",
                             new SqlParameter("@QueryType", "SaveBindInvetoryUser"),
                             new SqlParameter("@Password", pass),
                             new SqlParameter("@PasswordKey", pwdKey),
                             new SqlParameter("@EmailId", user.EmailId),
                             new SqlParameter("@UserPin", user.UserPin),
                            new SqlParameter("@Controller", user.InventoryController),
                            new SqlParameter("@UserName", user.UserName),
                            new SqlParameter("@StorePicker", user.StorePicker));
                        
                   
              return 1;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public List<UserLogin> LoginUser(UserLogin user)
        {
            try
            {
                
               
                string getPass = string.Empty;
                string getEmail = string.Empty;
               
               List<UserLogin> list =   db.UserLogin.FromSql(@"SP_Login @QueryType,@Emailid",
                    new SqlParameter("@QueryType", "UserAccess"),
                    new SqlParameter("@Emailid", user.EmailId)
                    ).ToList();
               
                    return list ;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public string FrgtPassword(FrgtPassword user)
        {
            string getEmail = string.Empty;
            try
            {
                List<FrgtPassword> list = db.FrgtPassword.FromSql(@"SP_Login @QueryType,@Emailid",
                     new SqlParameter("@QueryType", "ForgotPassword"),
                     new SqlParameter("@Emailid", user.EmailId)
                     ).ToList();

                foreach (var value in list)
                {
                  
                    getEmail = value.EmailId;

                }
                return getEmail;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public List<GetUserData> BindGrid()
        {
            try            {

                FRDInventoryContext db1 = new FRDInventoryContext();
                {
                List<GetUserData> list = db1.Set<GetUserData>().AsNoTracking().FromSql(@"SP_Login @QueryType",
                    new SqlParameter("@QueryType", "BindUserGrid")).ToList();
                    return list;
                }
            }
            catch (Exception e) {
                throw;
            }
                    }

        public int DeleteUser(int userId)
        {
            try
            {
                db.Database.ExecuteSqlCommand(@"Sp_DeviceUser @QueryType,@UserName,@EmailId,@Password,@PasswordKey, @UserPin,@StorePicker,@Controller,@UserId",
                            new SqlParameter("@QueryType", "DeleteUser"),
                            new SqlParameter("@Password", ""),
                             new SqlParameter("@PasswordKey", ""),
                             new SqlParameter("@EmailId", ""),
                             new SqlParameter("@UserPin", ""),
                            new SqlParameter("@Controller", ""),
                            new SqlParameter("@UserName", ""),
                            new SqlParameter("@StorePicker", ""),
                             new SqlParameter("@UserId", userId));
                return 1;
            }
            catch(Exception e)
            {
                throw;
            }
          
        }


        public string ChangePassword(UserLogin user)
        {
            try
            {
                string[] Arr = user.Password.Split("_");
                string getPass = string.Empty;
                string getEmail = string.Empty;

                List<UserLogin> list = db.UserLogin.FromSql(@"SP_Login @QueryType,@Emailid",
                    new SqlParameter("@QueryType", "getPassword"),
                    new SqlParameter("@Emailid", user.EmailId)
                    ).ToList();

                if (list.Count > 0)
                {
                    foreach (var value in list)
                    {
                        getPass = DbSecurity.Decrypt(value.Password, value.PasswordKey);
                        getEmail = value.EmailId;

                    }

                    if (getPass == Arr[1])
                    {
                        string pass = string.Empty;
                        string pwdKey = string.Empty;
                        if (Arr[0].Trim() != "")
                        {

                            pass = DbSecurity.Encrypt(Arr[0], ref pwdKey);
                        }

                        db.Database.ExecuteSqlCommand(@"SP_Login @QueryType,@EmailId,@Password,@PasswordKey",
                           new SqlParameter("@QueryType", "UpdatePassword"),
                           new SqlParameter("@EmailId", getEmail),
                        new SqlParameter("@Password", pass),
                            new SqlParameter("@PasswordKey", pwdKey));

                            string status = "success";
                            return status;
                    }
                    else
                    {

                        string status = "Current password is not valid";
                        return status;
                    }
                }
                else
                {
                    string status = "Please Login";
                    return status;

                }

            }
            catch(Exception e) {
                throw;
            }
        }

    }
    
   
}
