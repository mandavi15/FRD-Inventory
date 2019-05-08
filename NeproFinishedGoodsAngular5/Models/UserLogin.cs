using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FRDInventory.Models
{
    public class UserLogin
    {
        [Key]
        public string EmailId { get; set; }
        public string Password { get; set; }
        public string PasswordKey { get; set; }
        
    }
}
