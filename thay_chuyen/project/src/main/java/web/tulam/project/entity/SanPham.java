package web.tulam.project.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_DEFAULT;

@Entity
@Table(name = "sanpham")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(NON_DEFAULT)
public class SanPham {
    @Id
    @UuidGenerator
    @Column(name = "id", unique = true, updatable = false)
    private String maSanPham;
    private String tenSanPham;
    @Column(columnDefinition = "TEXT")
    private String moTa;
    private Long gia;
    private Integer soLuong;
    private String thuongHieu;
    private String hinhAnhUrl;
    private Integer soLuongThat;
    private String linkYoutube;
}
