package com.arhevdika.meta.controller;
import java.io.IOException;
import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import jakarta.servlet.http.HttpServletResponse;
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

import com.arhevdika.meta.Encdec;
import com.arhevdika.meta.Model.MetaDataResponse;
import com.arhevdika.meta.payload.ApplicantPayload;
import com.arhevdika.meta.payload.DataPayload;
import com.arhevdika.meta.payload.MetaDataResponsePayload;
import com.arhevdika.meta.repo.MetadataResponseRepo;
import com.arhevdika.meta.response.GeneralResponse;
import com.arhevdika.meta.response.MetaResponse_Response;
@CrossOrigin(origins = "*") 
@RestController
public class MetaRequestResponseController {
	Encdec encdec= new Encdec();
	@Autowired
	private MetadataResponseRepo metaDataRepo;
	
	@RequestMapping(value = { "/response" }, method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_JSON_VALUE })
	@ResponseStatus(value = HttpStatus.OK)
	public ResponseEntity<MetaResponse_Response> save_metadataResponse(@RequestBody MetaDataResponsePayload metaPayload) {
		System.out.println("save MetaData Response api has been called !!! Start Of Method save metadata response");
		HttpStatus httpstatus=null;
		String response="";
		String status=null;
	
		try {
			
			Long Applicant_id=(Long.parseLong(encdec.decryptnew(metaPayload.getApplicant_id())));
			String Applicant_response=(encdec.decryptnew(metaPayload.getResponse()));
			String User_pin=(encdec.decryptnew(metaPayload.getUser_pin()));
			Long request_id=(Long.parseLong(encdec.decryptnew(metaPayload.getRequest_id())));
			
		
			Date date = new Date();
			//Datetime_of_request=(date);
			//metaDataRepo.save(mt);
			metaDataRepo.updateMetaResponse(Applicant_response, date,request_id);
			response="response saved successfully for applicant id"+Long.parseLong(encdec.decryptnew(metaPayload.getApplicant_id()));
					status="true";
			httpstatus=HttpStatus.OK;
			}
					
		catch (Exception e) {
			
			response="Error While saving metadata response" + e.getMessage();
			//LOGGER.error(response + e.getMessage());
			status="false";
			httpstatus=HttpStatus.BAD_REQUEST;
		}
		System.out.println(response);
		return ResponseEntity.status(httpstatus).body(new MetaResponse_Response (encdec.encryptnew(response),encdec.encryptnew(status)));
	}

	@RequestMapping(value = { "/request" }, method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_JSON_VALUE })
	@ResponseStatus(value = HttpStatus.OK)
	public ResponseEntity<GeneralResponse> save_metadataRequest(@RequestBody  ApplicantPayload metaPayload) {
		//LOGGER.info("save MetaData Request api has been called !!! Start Of Method save metadata request");
		
		HttpStatus httpstatus=null;
		String response="";
		String status=null;
		String request_id=null;
		try {
			 MetaDataResponse mt=new MetaDataResponse();
			
			mt.setApplicant_id(Long.parseLong(encdec.decryptnew(metaPayload.getApplicant_id())));
			if(!(metaPayload.getUser_pin()==null)) {
			mt.setUser_pin(encdec.decryptnew(metaPayload.getUser_pin()));}
			
			mt.setRequest_type("request");
			System.out.println("in request api and request is"+metaPayload.getApplicant_id());
			 Date date = new Date();			
			mt.setDatetime_of_request(date);
			
			metaDataRepo.save(mt);
			Long request=metaDataRepo.getRequest_id(mt.getApplicant_id(), mt.getDatetime_of_request(),mt.getUser_pin());		
			System.out.println("request id is"+request);
			request_id=encdec.encryptnew(String.valueOf(request));	
				response="request time saved successfully for applicant id"+Long.parseLong(encdec.decryptnew(metaPayload.getApplicant_id()));
					status="true";
			httpstatus=HttpStatus.OK;
			}
					
		catch (Exception e) {
			
			response="Error While saving metadata request" + e.getMessage();
			System.out.println("resposne error is"+response);
			//LOGGER.error(response + e.getMessage());
			status="false";
			httpstatus=HttpStatus.BAD_REQUEST;
		}
		return ResponseEntity.status(httpstatus).body(new GeneralResponse (encdec.encryptnew(response),encdec.encryptnew(status),request_id));
	}
}

