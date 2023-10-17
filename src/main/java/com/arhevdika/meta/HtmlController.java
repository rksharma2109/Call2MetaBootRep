import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HtmlController {
 @GetMapping("/index")
    public String serveIndexPage() {
        return "index";
    }
	 @GetMapping("/meta")
    public String serveMetaPage1() {
        return "Meta";
    }
}
