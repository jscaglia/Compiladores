package Grupo2.Garage.Infraestructure.Class.Garage;

import Grupo2.Garage.Infraestructure.Class.Vehiculos.Auto;
import Grupo2.Garage.Infraestructure.Class.Vehiculos.NoVehiculo;
import Grupo2.Garage.Infraestructure.Exceptions.GarageException;
import Grupo2.Garage.Infraestructure.Interfaces.IVehiculo;
import lombok.var;

import java.util.ArrayList;
import java.util.Date;

public class Garage {
    public ArrayList<PisoGarage> PisosGarage;

    public Garage(Integer piso, Integer espacios) {
        this.PisosGarage = new ArrayList<PisoGarage>(piso);

        for (var i = 0; i < piso; i++) {
            this.PisosGarage.add(i, new PisoGarage(espacios, i));
        }
    }

    public Coordenada GuardarVehiculoPosicion(IVehiculo vehiculo, Integer piso, Integer posicion) throws GarageException {
        try {
            if (this.checkPosicion(piso, posicion)) {
                this.PisosGarage.get(piso).Espacios.get(posicion).Ocupado = true;
                this.PisosGarage.get(piso).Espacios.get(posicion).OcupadoPor = vehiculo;
                this.PisosGarage.get(piso).Espacios.get(posicion).Tiempo = new Date();
                return this.PisosGarage.get(piso).Espacios.get(posicion).Coordenada;
            }

            return null;

        } catch (GarageException e) {
            throw e;
        }
    }

    public Coordenada GuardarVehiculo(IVehiculo vehiculo) throws GarageException {
        Coordenada coordenada = null;
        boolean isBreak = false;

        for (int i = 0; i < this.PisosGarage.size(); i++) {
            if (!isBreak) {
                for (int j = 0; j < this.PisosGarage.get(i).Espacios.size(); j++) {
                    if (!this.PisosGarage.get(i).Espacios.get(j).Ocupado && !isBreak) {
                        this.PisosGarage.get(i).Espacios.get(j).Ocupado = true;
                        this.PisosGarage.get(i).Espacios.get(j).OcupadoPor = vehiculo;
                        coordenada = this.PisosGarage.get(i).Espacios.get(j).Coordenada;
                        isBreak = true;
                    }
                }
            }
        }

        if (isBreak) {

            return coordenada;
        }

        throw new GarageException("No hay lugares libres");

    }

    public Double QuitarVehiculo(Integer piso, Integer posicion) throws GarageException {
        try {
            Double monto = 0.0;

            if (this.checkPosicionUnPark(piso, posicion)) {
                Long fechaFin = new Date().getTime();
                long duracion = fechaFin - this.PisosGarage.get(piso).Espacios.get(posicion).Tiempo.getTime();

                monto = Math.floor(duracion / 60 / 60) * ((Double) ((Auto) this.PisosGarage.get(piso).Espacios.get(posicion).OcupadoPor).Tarifa);

                this.PisosGarage.get(piso).Espacios.get(posicion).Ocupado = false;
                this.PisosGarage.get(piso).Espacios.get(posicion).OcupadoPor = new NoVehiculo();
            }

            return monto;
        } catch (GarageException e) {
            throw e;
        }
    }

    public Coordenada GetPrimerLugarLibre() throws GarageException {
        Coordenada coordenadaResult = new Coordenada(-1, -1);
        boolean mustBreak = false;

        for (int i = 0; i < this.PisosGarage.size(); i++) {
            if (!mustBreak) {
                for (int j = 0; j < this.PisosGarage.get(i).Espacios.size(); j++) {
                    if (!this.PisosGarage.get(i).Espacios.get(j).Ocupado && !mustBreak) {
                        mustBreak = true;
                        coordenadaResult = new Coordenada(this.PisosGarage.get(i).Espacios.get(j).Coordenada.Piso, this.PisosGarage.get(i).Espacios.get(j).Coordenada.Espacio);
                    }
                }
            }
        }
        if (mustBreak) {
            return coordenadaResult;
        }

        throw new GarageException("No hay lugares libres");
    }

    private boolean checkPosicion(Integer piso, Integer posicion) throws GarageException {
        if (this.PisosGarage.get(piso) == null) {
            throw new GarageException("No existe ese piso.");
        }

        if (this.PisosGarage.get(piso).CantidadEspacios < posicion + 1) {
            throw new GarageException("No existe esa posición.");
        }

        if (this.PisosGarage.get(piso).Espacios.get(posicion).Ocupado) {
            throw new GarageException("Esa posición está ocupada.");
        }
        return true;
    }

    private boolean checkPosicionUnPark(Integer piso, Integer posicion) throws GarageException {
        if (this.PisosGarage.get(piso) == null) {
            throw new GarageException("No existe ese piso.");
        }

        if (this.PisosGarage.get(piso).CantidadEspacios < posicion + 1) {
            throw new GarageException("No existe esa posición.");
        }

        if (!this.PisosGarage.get(piso).Espacios.get(posicion).Ocupado) {
            throw new GarageException("Este espacio ya está vacio.");
        }
        return true;
    }
}
