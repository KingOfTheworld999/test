package web.tulam.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import web.tulam.project.entity.SanPham;

import java.util.List;

public interface SanPhamRepo extends JpaRepository< SanPham,String> {
    List<SanPham> getSanPhamByThuongHieu(String thuongHieu);

    List<SanPham> getSanPhamByTenSanPham(String tenSanPham);
}
