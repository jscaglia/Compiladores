package Grupo2.Garage.Services;

import Grupo2.Garage.IServices.IGarageService;
import Grupo2.Garage.Infraestructure.Class.Garage.Coordenada;
import Grupo2.Garage.Infraestructure.Class.Garage.Garage;
import Grupo2.Garage.Infraestructure.Class.GarageEntity;
import Grupo2.Garage.Infraestructure.Class.Vehiculos.Auto;
import Grupo2.Garage.Infraestructure.Class.Vehiculos.Camioneta;
import Grupo2.Garage.Infraestructure.Enums.EVehiculo;
import Grupo2.Garage.Infraestructure.Exceptions.GarageException;
import Grupo2.Garage.Infraestructure.Interfaces.IVehiculo;
import Grupo2.Garage.Repository.IGarageRepository;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class GarageService implements IGarageService {
    @Autowired
    private IGarageRepository garageRepo;

    private Garage garage;

    private Garage getGarage() {
        if (garage == null) {
            garage = new Garage(5, 20);
        }
        return garage;
    }

    @Override
    public Coordenada GuardarVehiculoPosicion(IVehiculo vehiculo, Integer piso, Integer posicion) throws GarageException {
        try {
            var result = getGarage().GuardarVehiculoPosicion(vehiculo, piso, posicion);

            GarageEntity garageEntity = new GarageEntity();
            Date dt = new Date();

            garageEntity.setPiso(piso);
            garageEntity.setPosicion(posicion);


            if(vehiculo.getTipoVehiculo() == EVehiculo.AUTOMOVIL.name()){
                garageEntity.setPatente(((Auto)vehiculo).Patente);
                garageEntity.setFecha_ingreso(dt);
                garageEntity.setTipoAuto(((EVehiculo)((Auto)vehiculo).TipoVehiculo).name());
            } else{
                garageEntity.setPatente(((Camioneta)vehiculo).Patente);
                garageEntity.setFecha_ingreso(dt);
                garageEntity.setTipoAuto(((EVehiculo)((Camioneta)vehiculo).TipoVehiculo).name());
            }

            this.garageRepo.save(garageEntity);

            return result;
        } catch (GarageException e) {
            throw e;
        }
    }

    @Override
    public Coordenada GuardarVehiculo(IVehiculo vehiculo) throws GarageException {
        try {
        var result = getGarage().GuardarVehiculo(vehiculo);

            GarageEntity garageEntity = new GarageEntity();
            Date dt = new Date();

            garageEntity.setPiso(result.Piso);
            garageEntity.setPosicion(result.Espacio);


            if(vehiculo.getTipoVehiculo() == EVehiculo.AUTOMOVIL.name()){
                garageEntity.setPatente(((Auto)vehiculo).Patente);
                garageEntity.setFecha_ingreso(dt);
                garageEntity.setTipoAuto(((EVehiculo)((Auto)vehiculo).TipoVehiculo).name());
            } else{
                garageEntity.setPatente(((Camioneta)vehiculo).Patente);
                garageEntity.setFecha_ingreso(dt);
                garageEntity.setTipoAuto(((EVehiculo)((Camioneta)vehiculo).TipoVehiculo).name());
            }

            this.garageRepo.save(garageEntity);

        return result;
        } catch (GarageException e) {
            throw e;
        }
    }

    @Override
    public Double QuitarVehiculo(Integer piso, Integer posicion, String patente) throws GarageException {
        try {
            var result = getGarage().QuitarVehiculo(piso, posicion);

            var vehiculoGarage = this.garageRepo.findByPatente(patente);

            if(vehiculoGarage != null) {
                this.garageRepo.delete(vehiculoGarage.get());
            } else{
                throw new GarageException("La patente no existe en la BBDD");
            }

            return result;
        } catch (GarageException e) {
            throw e;
        }
    }

    @Override
    public Coordenada GetPrimerLugarLibre() throws GarageException {
        try {
            return getGarage().GetPrimerLugarLibre();
        } catch (GarageException e) {
            throw e;
        }
    }
}
