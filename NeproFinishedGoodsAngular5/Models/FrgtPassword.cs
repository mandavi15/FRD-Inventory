using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FRDInventory.Models
{
    public class FrgtPassword
    {
        [Key]
        public string EmailId{ get; set; }
       
    }
}
