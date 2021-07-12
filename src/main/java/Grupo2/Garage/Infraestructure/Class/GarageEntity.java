package Grupo2.Garage.Infraestructure.Class;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "garage")
public class GarageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "piso")
    private Integer piso;

    @Column(name = "posicion")
    private Integer posicion;

    @Column(name = "patente")
    private String patente;

    @Column(name = "tipo_auto")
    private String tipo_auto;

    @Column(name = "fecha_ingreso")
    private Date fecha_ingreso;

    public GarageEntity() {

    }

    public Long getId() {
        return id;
    }

    public void setPiso(Integer piso) {
        this.piso = piso;
    }

    public Integer getPosicion() {
        return posicion;
    }

    public void setPosicion(Integer posicion) {
        this.posicion = posicion;
    }

    public String getPatente() {
        return patente;
    }

    public void setPatente(String patente) {
        this.patente = patente;
    }

    public String getTipoAuto() {
        return tipo_auto;
    }

    public void setTipoAuto(String tipoAuto) {
        this.tipo_auto = tipoAuto;
    }

    public void setFecha_ingreso(Date fecha_ingreso) {this.fecha_ingreso = fecha_ingreso;}

    public Date getFecha_ingreso() {return fecha_ingreso;}
}
