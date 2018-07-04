<%@ WebHandler Language="C#" Class="TestHandler" %>

using System;
using System.Web;
using System.Collections;
using System.Web.Script.Serialization;
using System.Linq;

public class TestHandler : IHttpHandler
{

    string[] capitals;
    JavaScriptSerializer jsSerializer = new JavaScriptSerializer();

    public TestHandler()
    {
        capitals = new string[7];

        capitals[0] = "Amsterdam";
        capitals[1] = "London";
        capitals[2] = "Kiev";
        capitals[3] = "Paris";
        capitals[4] = "Athens";
        capitals[5] = "Berlin";
        capitals[6] = "Madrid";
    }

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";

        string cityName = context.Request.QueryString["name"];
        string response = "";

        if (cityName.Length > 0)
        {
            var resArray = capitals.Where(c => c.StartsWith(cityName));
            response = jsSerializer.Serialize(resArray);
        }
        
        context.Response.Write(response);
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}