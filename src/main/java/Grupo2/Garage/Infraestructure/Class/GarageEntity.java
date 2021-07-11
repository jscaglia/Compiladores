package Grupo2.Garage.Infraestructure.Class;

import javax.persistence.*;

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

    @Column(name = "tipoAuto")
    private String tipoAuto;

    public GarageEntity() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPiso() {
        return piso;
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
        return tipoAuto;
    }

    public void setTipoAuto(String tipoAuto) {
        this.tipoAuto = tipoAuto;
    }
}
