using System;
using System.Collections.Generic;

namespace FRDInventory.Models
{
    public partial class TblUserLogin
    {
        public long UserId { get; set; }
        public string UserRole { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
        public string PasswordKey { get; set; }
        public long? UserPin { get; set; }
        public string CreatedById { get; set; }
        public string CreatedByName { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string UpdatedById { get; set; }
        public string UpdatedByName { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string UserName { get; set; }
        public string StorePicker { get; set; }
        public string Receiver { get; set; }
        public string InventoryController { get; set; }
        public long? UserCode { get; set; }
    }
}
