package com.arhevdika.meta;

import java.io.IOException;
import java.net.URI;
import java.util.Map;

import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException.BadRequest;
import org.springframework.web.client.HttpServerErrorException.InternalServerError;
import org.springframework.web.servlet.view.RedirectView;

import com.arhevdika.meta.Encdec;
@CrossOrigin(origins = "*") 
@RestController
public class CallToMeta {

	
	/*@RequestMapping("/meta")
	  void handleFoo(HttpServletResponse response) throws IOException {
		String data = 
	    response.sendRedirect("http://truckersapp.eastus.cloudapp.azure.com:9080/metaWebApp/index.html?data=U2FsdGVkX18huKndy8J3qoSs2/C9YkkujdzzUzs5RVjYuRxVvvVsN1iG64gbOhfTY8NfeG9Pa4pKW5C245CVHzWdOnSYDzp73Oyi7k4OWUFKs58HK+cUtm2+f82t1Cb5HCU4m7t1i2oFZQvhWJPPDUJ+ZaWb2iIRvl6W5X8UoXGn2m2mks2nb14PdEEBhdf/");
	  }*/
	//EncryptDecrypt encdec=new EncryptDecrypt();
	Encdec encdec= new Encdec();
	@GetMapping(value = "/ssl-test")
    public String inbound(){
        return "Inbound TLS is working!!";
    }
	@RequestMapping(value={"/meta"}, method = RequestMethod.POST)
	  public  ResponseEntity<GeneralResponse>  callTometa(@RequestBody MetaPayload metaPayload,HttpServletResponse response ) throws IOException   {
			HttpStatus httpstatus=null;
			String responseMessage="";
			String status=null;
			try {
				 System.out.println("in call to meta dukh bhanjan1 api");	
			String data="name="+metaPayload.getName()+"&clanguage="+metaPayload.getClanguage()+"&accnum="+metaPayload.getAccnum()+"&loanamout="+metaPayload.getLoanamout()+"&pendingamount="+metaPayload.getPendingamount()+"&EMIamount="+metaPayload.getEMIamount()+"&duedate="+metaPayload.getDuedate()+"&pemi="+metaPayload.getPemi() ; 
			 System.out.println(data);
			String encData=encdec.encryptnew(data);
		    System.out.println(encData);
		    System.out.println(response);
		 
		    response.setHeader("Access-Control-Allow-Origin", "https://truckersapp.eastus.cloudapp.azure.com/index.html");
			//response.sendRedirect("http://truckersapp.eastus.cloudapp.azure.com:9080/metaWebApp/index.html?data="+encData);
		    response.sendRedirect("https://truckersapp.eastus.cloudapp.azure.com/index.html?data=U2FsdGVkX18RqgaQSJ4FtIwILZHMWdVXXiFpgimNDTPMqvynO3vG8OFvv8imUIrfj91gDDTGzENjbz8BaxhvOvnd8OQ4P3drYOaPpjWVXfOB6vKEsffx3fKtZNSuzqxx13AYJaApf+NYLFlFMSFO7BDCdGaDrH/GtS7BeFVrWsc1Djup/lm+QZ16JtKkEX+a");
		    responseMessage="Url opened successfully";
			 status="true";
			 httpstatus=HttpStatus.OK;
			}
		catch(BadRequest e){
			responseMessage="Error While opening url" + e.getMessage();
			 status="false";
			 httpstatus=HttpStatus.BAD_REQUEST;
			System.out.println("error is"+e);}
		catch(InternalServerError e) {
			responseMessage="Error While opening url" + e.getMessage();
			 status="false";
			 httpstatus=HttpStatus.INTERNAL_SERVER_ERROR;
			System.out.println("error is"+e);		
		}
		
			return ResponseEntity.status(httpstatus).body(new GeneralResponse(encdec.encryptnew(responseMessage),encdec.encryptnew(status)));
		}
//	public ResponseEntity<Void> redirect(
//			@RequestBody MetaPayload 
//			metaPayload,HttpServletResponse response 
//			) 
//					throws IOException   {
//		//HttpStatus httpstatus=null;
//		String responseMessage="";
//		String status=null;
//		String encData=null;
//		
//			 System.out.println("in call to meta apinew ");	
//		String data="name="+metaPayload.getName()+"&clanguage="+metaPayload.getClanguage()+"&accnum="+metaPayload.getAccnum()+"&loanamout="+metaPayload.getLoanamout()+"&pendingamount="+metaPayload.getPendingamount()+"&EMIamount="+metaPayload.getEMIamount()+"&duedate="+metaPayload.getDuedate()+"&pemi="+metaPayload.getPemi() ; 
//		// System.out.println(data);
//		encData= encdec.encryptnew(data);
//	    System.out.println(encData);
//	   //System.out.println(response);   
//	   // RedirectView redirectView = new RedirectView();
//	    return ResponseEntity.status(HttpStatus.FOUND).location(URI.create("https://fullstackdeveloper.guru")).build();
//    
//}

		 //return ResponseEntity.status(HttpStatus.FOUND).location(URI.create("https://truckerstest/index.html?data="+encData)).build();
		//return ResponseEntity.status(httpstatus).body(new GeneralResponse(encdec.encryptnew(responseMessage),encdec.encryptnew(status)));
	
	@PostMapping(value = "/redirect")
	
	   public RedirectView redirect(@RequestParam Map<String,String> input){
	 
	       System.out.println(input);
	 
	 
	       RedirectView redirectView = new RedirectView();
	       redirectView.setUrl("https://truckersapp.eastus.cloudapp.azure.com/index.html?data=U2FsdGVkX18RqgaQSJ4FtIwILZHMWdVXXiFpgimNDTPMqvynO3vG8OFvv8imUIrfj91gDDTGzENjbz8BaxhvOvnd8OQ4P3drYOaPpjWVXfOB6vKEsffx3fKtZNSuzqxx13AYJaApf+NYLFlFMSFO7BDCdGaDrH/GtS7BeFVrWsc1Djup/lm+QZ16JtKkEX+a");
	 
	       return redirectView;
	      
	   }
	  
}
