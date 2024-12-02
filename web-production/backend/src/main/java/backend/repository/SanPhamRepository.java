package backend.repository;

import backend.domain.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SanPhamRepository extends JpaRepository<SanPham, String> {


    List<SanPham> getSanPhamByThuongHieu(String thuongHieu);
}
