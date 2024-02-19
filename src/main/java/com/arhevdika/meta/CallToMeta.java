package com.arhevdika.meta;

import java.io.IOException;
import java.net.URI;
import java.util.Map;
import org.springframework.web.servlet.ModelAndView;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.ui.ModelMap;
import org.springframework.ui.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.HttpStatus;
import com.arhevdika.meta.Encdec;
//@CrossOrigin(origins = {"https://nice-water-07efcb210.3.azurestaticapps.net","https://metawebapp.azurewebsites.net"})
@RestController
public class CallToMeta {


	Encdec encdec= new Encdec();
	@GetMapping(value = "/ssl-test")
    public String inbound(){
        return "Inbound TLS is working!!";
    }
@RequestMapping(value="/gotoNextPage",method = RequestMethod.POST)
public  RedirectView gotoNextPage(@RequestBody MetaPayload metaPayload) throws IOException {
    System.out.println("Inside gotoNextPage!!!!!!");
            return new RedirectView("/index.html", true);
    }
   
	@RequestMapping(value={"/meta"}, method = RequestMethod.POST)
	  public ResponseEntity<Void>  callTometa(@RequestBody MetaPayload metaPayload )
			  throws IOException   {
			HttpStatus httpstatus=null;
			String responseMessage="";
			String status=null;
		    	HttpHeaders httpHeaders = new HttpHeaders();
		   
			try {
				System.out.println("in call to meta dukh bhanjan1 api new one");
				String data="name="+metaPayload.getName()+"&clanguage="+metaPayload.getClanguage()+"&accnum="+metaPayload.getAccnum()+"&loanno="+metaPayload.getLoanno()
					+"&loanamout="+metaPayload.getLoanamout()+"&pendingamount="+metaPayload.getPendingamount()+"&EMIamount="+metaPayload.getEMIamount()+"&duedate="+metaPayload.getDuedate()+"&pemi="+metaPayload.getPemi()+"&cinstatus="+metaPayload.getCInstatus()+"&Lastpaiddate="+metaPayload.getLastpaiddate()+"&nextemidate="+metaPayload.getNextemidate()+"&Totalpaidemi="+metaPayload.getTotalpaidemi()+"&Outstanding="+metaPayload.getOutstanding()+"&Preclosureamt="+metaPayload.getPreclosureamt()+"&Centermangcontactno="+metaPayload.getCentermangcontactno()+"&Branchmgrname="+metaPayload.getBranchmgrname()+"&Branchmgrcontactno="+metaPayload.getBranchmgrcontactno(); 
			 System.out.println(data);
				String encData=encdec.encryptnew(data);
			   	System.out.println(encData);
				responseMessage="Url opened successfully";
				 URI redirecturl = new URI("https://metawebapp.azurewebsites.net/index.html?data="+encData);
				 httpHeaders.setLocation(redirecturl);
				status="true";
				httpstatus=HttpStatus.OK;	
			}
		catch(BadRequest e){
			responseMessage="Error While opening url" + e.getMessage();
			 status="false";
			 httpstatus=HttpStatus.BAD_REQUEST;
			System.out.println("error is"+e);}
		catch(Exception e) {
			responseMessage="Error While opening url" + e.getMessage();
			 status="false";
			 httpstatus=HttpStatus.INTERNAL_SERVER_ERROR;
			System.out.println("error is"+e);
		}
		   	 return new ResponseEntity<>(httpHeaders, HttpStatus.SEE_OTHER);      
	}
	// @PostMapping(value = "/redirectURL")
	//  public ResponseEntity<Void>  redirectURL(@RequestBody MetaPayload
	// 		metaPayload,HttpServletResponse response) throws IOException {
	//  String redirectUrl ="/index.html?data=U2FsdGVkX18RqgaQSJ4FtIwILZHMWdVXXiFpgimNDTPMqvynO3vG8OFvv8imUIrfj91gDDTGzENjbz8BaxhvOvnd8OQ4P3drYOaPpjWVXfOB6vKEsffx3fKtZNSuzqxx13AYJaApf+NYLFlFMSFO7BDCdGaDrH/GtS7BeFVrWsc1Djup/lm+QZ16JtKkEX+a";
 //   	 return ResponseEntity.status(HttpStatus.FOUND).location(URI.create(redirectUrl)).build();  
 //    }
		
	@PostMapping(value = "/redirectURL")
	 public String  redirectURL(@RequestBody MetaPayload
			metaPayload) {
		 String data="";
		 String encData="";
		 try {
		 System.out.println("in call to meta dukh bhanjan1 api new one");
		 data="name="+metaPayload.getName()+"&clanguage="+metaPayload.getClanguage()+"&accnum="+metaPayload.getAccnum()+"&loanno="+metaPayload.getLoanno()+"&loanamout="+metaPayload.getLoanamout()+"&pendingamount="+metaPayload.getPendingamount()+"&EMIamount="+metaPayload.getEMIamount()+"&duedate="+metaPayload.getDuedate()
			+"&pemi="+metaPayload.getPemi()+"&cinstatus="+metaPayload.getCInstatus()
			+"&Lastpaiddate="+metaPayload.getLastpaiddate()+"&nextemidate="+metaPayload.getNextemidate()
			+"&Totalpaidemi="+metaPayload.getTotalpaidemi()+"&Outstanding="+metaPayload.getOutstanding()
			+"&Preclosureamt="+metaPayload.getPreclosureamt()+"&Centermangcontactno="+metaPayload.getCentermangcontactno()
			+"&Branchmgrname="+metaPayload.getBranchmgrname()+"&Branchmgrcontactno="+metaPayload.getBranchmgrcontactno()
			+"&applicant_id="+metaPayload.getApplicant_id()+"&user_id="+metaPayload.getUser_id(); 
			 System.out.println(data);
				 encData=encdec.encryptnew(data);
			   	System.out.println(encData);
		 }catch(Exception e) {
			
			System.out.println("error is"+e);
		}
	 String redirectUrl ="https://metawebapp.azurewebsites.net/index.html?data="+encData;
   	 return redirectUrl; 
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
//		String data="name="+metaPayload.getName()+"&clanguage="+metaPayload.getClanguage()+"&accnum="+metaPayload.getAccnum()+"&loanno="+metaPayload.getLoanno()+"&loanamout="+metaPayload.getLoanamout()+"&pendingamount="+metaPayload.getPendingamount()+"&EMIamount="+metaPayload.getEMIamount()+"&duedate="+metaPayload.getDuedate()+"&pemi="+metaPayload.getPemi() ;
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
	       redirectView.setUrl("https://metawebapp.azurewebsites.net/index.html?"+input);

	       return redirectView;

	   }
//	@RequestMapping(value = { "/response" }, method = RequestMethod.POST, produces = {
//			MediaType.APPLICATION_JSON_VALUE })
//	@ResponseStatus(value = HttpStatus.OK)
//	public ResponseEntity<MetaResponse_Response> save_metadataResponse(@RequestBody MetaDataResponsePayload metaPayload) {
//		LOGGER.info("save MetaData Response api has been called !!! Start Of Method save metadata response");
//
//		HttpStatus httpstatus=null;
//		String response="";
//		String status=null;
//
//		try {
//			 MetaDataResponse mt=new MetaDataResponse();
//			mt.setApplicant_id(Long.parseLong(encdec.decryptnew(metaPayload.getApplicant_id())));
//			mt.setApplicant_response(encdec.decryptnew(metaPayload.getResponse()));
//			mt.setUser_pin(encdec.decryptnew(metaPayload.getUser_pin()));
//			 Date date = new Date();
//
//			mt.setRequest_type("response");
//
//			mt.setDatetime_of_request(date);
//			metaDataRepo.save(mt);
//
//				response="response saved successfully for applicant id"+Long.parseLong(encdec.decryptnew(metaPayload.getApplicant_id()));
//					status="true";
//			httpstatus=HttpStatus.OK;
//			}
//
//		catch (Exception e) {
//
//			response="Error While saving metadata response" + e.getMessage();
//			LOGGER.error(response + e.getMessage());
//			status="false";
//			httpstatus=HttpStatus.BAD_REQUEST;
//		}
//		return ResponseEntity.status(httpstatus).body(new MetaResponse_Response (encdec.encryptnew(response),encdec.encryptnew(status)));
//	}
//	@RequestMapping(value = { "/request" }, method = RequestMethod.POST, produces = {
//			MediaType.APPLICATION_JSON_VALUE })
//	@ResponseStatus(value = HttpStatus.OK)
//	public ResponseEntity<MetaResponse_Response> save_metadataRequest(@RequestBody  ApplicantPayload metaPayload) {
//		LOGGER.info("save MetaData Request api has been called !!! Start Of Method save metadata request");
//
//		HttpStatus httpstatus=null;
//		String response="";
//		String status=null;
//
//		try {
//			 MetaDataResponse mt=new MetaDataResponse();
//			mt.setApplicant_id(Long.parseLong(encdec.decryptnew(metaPayload.getApplicant_id())));
//			mt.setRequest_type("request");
//
//			 Date date = new Date();
//
//			mt.setDatetime_of_request(date);
//			metaDataRepo.save(mt);
//
//				response="resquest time saved successfully for applicant id"+Long.parseLong(encdec.decryptnew(metaPayload.getApplicant_id()));
//					status="true";
//			httpstatus=HttpStatus.OK;
//			}
//
//		catch (Exception e) {
//
//			response="Error While saving metadata request" + e.getMessage();
//			LOGGER.error(response + e.getMessage());
//			status="false";
//			httpstatus=HttpStatus.BAD_REQUEST;
//		}
//		return ResponseEntity.status(httpstatus).body(new MetaResponse_Response (encdec.encryptnew(response),encdec.encryptnew(status)));
//	}
	//}


}
