package com.arhevdika.meta.repo;
import com.arhevdika.meta.Model.MetaDataResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MetadataResponseRepo extends JpaRepository<MetaDataResponse,String> {

}

                      