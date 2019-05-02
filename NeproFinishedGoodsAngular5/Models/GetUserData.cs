using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FRDInventory.Models
{
    public class GetUserData
    {
        public string UserName { get; set; }
       
        public string EmailId { get; set; }
        [Key]
        public long UserPin { get; set; }
        public string InventoryController { get; set; }
        public string StorePicker { get; set; }
        public string Status { get; set; }
    }
}
