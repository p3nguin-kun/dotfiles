# Cách cài Arch Linux UEFI
## 1. Kiểm tra UEFI
```
ls /sys/firmware/efi
```
nó ghi `no files or directory` thì tức là máy không có efi, nếu có file thì làm tiếp

## 2. Setup mạng
Mạng dây thì k cần, còn wifi thì
```
iwctl
device list
```
chọn thiết bị để kết nối wifi
```
station wlan0 get-networks  (tự thay wlan0 nhé)
station wlan0 connect "tên wifi"
exit
```

`ping google.com` để kiểm tra

## 3. Setup thời gian theo mạng
```
timedatectl set-ntp true
```

## 4. Sắp xếp mirror (tùy chọn, không làm cũng được)
```
pacman -Sy reflector
reflector -c Vietnam -c Singapore -c Japan -c India -a 12 --sort rate --save /etc/pacman.d/mirrorlist
```

## 5. Phân vùng ổ đĩa
Dùng `cfdisk` để phân vùng, `lsblk` để kiểm tra ổ đĩa
- 1 phân vùng cho efi (tầm 500mb)
- 1 phân vùng từ 1-16GB cho Linux swap
- 1 phân vùng cho Linux
Ví dụ:
- /dev/sda1 - EFI
- /dev/sda2 - Linux swap
- /dev/sda3 - Linux

nếu dùng ổ nvme thì nó sẽ là `/dev/nvme0n1px`, `x` là phân vùng

## 6. Format ổ đĩa
```
mkfs.fat -F32 /dev/sda1
mkswap /dev/sda2
swapon /dev/sda2
mkfs.ext4 /dev/sda3
```

## 7. Mount ổ đĩa
```
mount /dev/sda3 /mnt
mkdir /mnt/boot
mount /dev/sda1 /boot
```

## 8. Cài pkgs
```
pacstrap /mnt base base-devel linux linux-firmware linux-headers vim
```

## 9. Fstab
```
genfstab -U /mnt >> /mnt/etc/fstab
```

## 10. Chroot
```
arch-chroot /mnt
```

## 11. Cài đặt thời gian, vùng
```
ln -sf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime
hwclock --systohc
vim /etc/locale.gen
```

Uncomment: `en_US.UTF-8 UTF-8`

```
locale-gen
echo LANG=en_US.UTF-8 >> /etc/locale.conf
```

## 12. Hostname
```
echo archlinux >> /etc/hostname (Co the thay archlinux bang ten hostname ban muon)
vim /etc/hosts
```
```
127.0.0.1   localhost
::1     localhost
127.0.1.1   archlinux.localdomain   archlinux
```

## 13. Tạo mật khẩu cho root
```
passwd
```

## 14. Tạo tài khoản người dùng
```
useradd -m penguin  (thay penguin bằng tên ng dùng bạn muốn)
passwd penguin
usermod -aG wheel,audio,video,optical,storage,power penguin
EDITOR=vim visudo
```
Thêm: `penguin ALL=(ALL) ALL` sau `root ALL=(ALL:ALL) ALL`
Uncomment: `%wheel ALL=(ALL) ALL`

## 15. Cài bootloader
```
pacman -S grub networkmanager efibootmgr
systemctl enable NetworkManager
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
grub-mkconfig -o /boot/grub/grub.cfg
```

## 16. Khởi động lại
```
exit
umount -R /mnt
reboot
```

Hướng dẫn này chưa bao gồm cách cài giao diện người dùng, nếu bạn muốn sử dụng 1 giao diện đồ họa đơn giản, bạn có thể thử [penguinRice](https://github.com/p3nguin-kun/penguinRice)
