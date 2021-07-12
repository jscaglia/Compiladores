package Grupo2.Garage.Repository;

import Grupo2.Garage.Infraestructure.Class.GarageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IGarageRepository extends JpaRepository<GarageEntity, Long> {
    Optional<GarageEntity> findByPatente(String patente);
    void delete(GarageEntity vehiculo);
}
