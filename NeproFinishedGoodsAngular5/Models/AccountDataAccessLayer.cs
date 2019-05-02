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

        public List<TblUserLogin> LoginUser(TblUserLogin user)
        {
            try
            {
                
               
                string getPass = string.Empty;
                string getEmail = string.Empty;
               
               List<TblUserLogin> list =   db.TblUserLogin.FromSql(@"SP_Login @QueryType,@Emailid",
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

    }
    
   
}
