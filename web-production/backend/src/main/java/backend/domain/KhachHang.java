package backend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "khach_hang")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class KhachHang {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long maKhachHang;
    private String ten;
    private String email;
    private String matKhau;
    private String soDienThoai;
    private String diaChiGiaoHang;
}
