using Microsoft.AspNetCore.Mvc;

namespace FirstAPI.Controllers
{
    public class MovieController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
