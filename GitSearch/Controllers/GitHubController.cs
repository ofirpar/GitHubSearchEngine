using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace GitSearch.Controllers
{
    public class GitHubController : ApiController
    {
        // GET: api/GitHub
        /// <summary>
        /// Get all bookmarked repos
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Object> Get()
        {
            var gitReposList = HttpContext.Current.Session["GitRepos"];
            return ((List<Object>)gitReposList);
        }

        // GET: api/GitHub/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/GitHub
        /// <summary>
        /// Add the selected repo to the list in the session
        /// </summary>
        /// <param name="repo"></param>
        public void Post([FromBody]dynamic repo)
        {
            var gitReposList = HttpContext.Current.Session["GitRepos"];
            if (gitReposList == null)
            {
                gitReposList = new List<Object>();
            }
            ((List<Object>)gitReposList).Add(repo);
            HttpContext.Current.Session["GitRepos"] = gitReposList;
        }
        // PUT: api/GitHub/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GitHub/5
        public void Delete(int id)
        {
        }
    }
}
