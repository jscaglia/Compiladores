package Grupo2.Garage.Services;
import Grupo2.Garage.IServices.IGarageService;
import Grupo2.Garage.Infraestructure.Class.Garage.Coordenada;
import Grupo2.Garage.Infraestructure.Class.Garage.Garage;
import Grupo2.Garage.Infraestructure.Interfaces.IVehiculo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GarageService implements IGarageService {
    private Garage garage;

    private Garage getGarage() {
        if(garage == null){
            garage = new Garage(5,20);
        }
        return garage;
    }

    @Override
    public Coordenada GuardarVehiculoPosicion(IVehiculo vehiculo, Integer piso, Integer posicion) {
        return getGarage().GuardarVehiculoPosicion(vehiculo, piso, posicion);
    }

    @Override
    public Coordenada GuardarVehiculo(IVehiculo vehiculo) {
        return getGarage().GuardarVehiculo(vehiculo);
    }

    @Override
    public Double QuitarVehiculo(Integer piso, Integer posicion) {
        return getGarage().QuitarVehiculo(piso, posicion);
    }

    @Override
    public Coordenada GetPrimerLugarLibre() {
        return getGarage().GetPrimerLugarLibre();
    }
}
