package Grupo2.Garage.Repository;

import Grupo2.Garage.Infraestructure.Class.GarageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IGarageRepository extends JpaRepository<GarageEntity, Long> {

}
