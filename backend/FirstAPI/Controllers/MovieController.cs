using FirstAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace FirstAPI.Controllers
{
    //Define as API controller
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        //Context Attribute
        private MovieCollectionDbContext context;
        //Construct the Class:
        public MovieController(MovieCollectionDbContext temp)
        {
            context = temp;
        }
        //Define Get Method response
        public IEnumerable<Movie> Get()
        {
            //Retrieve + Filter Data from context
            var data = context.Movies
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();
            //Return the Data 
            return data;
        }

    }
}
