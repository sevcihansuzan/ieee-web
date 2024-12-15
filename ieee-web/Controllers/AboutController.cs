using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ieee_web.Controllers
{
    public class AboutController : Controller
    {
        // GET: About
        public ActionResult History()
        {
            return View();
        }

        public ActionResult VisionMission()
        {
            return View();
        }
    }
}