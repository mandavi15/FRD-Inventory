using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FRDInventory.Models;
using Microsoft.EntityFrameworkCore;

namespace FRDInventory.Controllers
{
    [Route("api/controller")]
    [ApiController]
    public class LoginController : Controller
    {
         FRDInventoryContext db = new FRDInventoryContext();
        [Produces("application/json")]
        [HttpGet("get")]
        public async Task<IActionResult> login()
        {
            try
            {
                var result = db.TblUserLogin.FromSql("xsxs").ToList();
                return Ok(result);
            }
            catch
            {
                return BadRequest();


            }

        }



    }
}