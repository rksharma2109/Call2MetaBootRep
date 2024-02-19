package com.arhevdika.meta.repo;
import com.arhevdika.meta.Model.MetaDataResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
@Repository
public interface MetadataResponseRepo extends JpaRepository<MetaDataResponse,Long> {
@Query("select a.request_id from MetaDataResponse a where a.applicant_id=?1 and a.datetime_of_request=?2 and a.user_pin=?3")
Long getRequest_id(Long applicant_id,Date datetime_of_request, String user_pin);
@Transactional
@Modifying
@Query("update MetaDataResponse a set a.applicant_response=?1, a.datetime_of_response=?2 where request_id=?3")
public void updateMetaResponse(String applicant_response,Date datetime_of_response, Long request_id);
}

                      
