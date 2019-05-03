using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FRDInventory.Models
{
    public class GetUserData
    {
        [Key]
        public long UserID { get; set; }
        public string UserName { get; set; }
        
        public string EmailId { get; set; }
        
        public long UserPin { get; set; }
        public string InventoryController { get; set; }
        public string StorePicker { get; set; }
        public string Status { get; set; }
    }
}
