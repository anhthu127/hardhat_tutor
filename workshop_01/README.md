# hardhat-tutor
workshop1- create an ERC-20 token 
a smart contract with full functionality

- Debug by console log in smart contract, will print to terminal when running unit test
- Deploy: install dotenv and make deploy folder

*** commands line ***
- npx hardhat compile
- npx hardhat test
- npx hardhat deploy

*** More information: ***

  1. mint _ đúc
    total supply _ toàn bộ token trong hệ thống
    owner _  địa chỉ ví của người tạo hợp đồng (hoặc một địa chỉ được chỉ định là người sở hữu token ban đầu).
  => chuyển toàn bộ token trong hệ thống cho ví của ng được chỉ định hoặc người tạo hđ
  => Việc mint toàn bộ supply cho owner nghĩa là ngay từ đầu, toàn bộ lượng token sẽ thuộc quyền kiểm soát của một người hoặc tổ chức. Sau đó họ có thể:

    - Gửi token cho người khác (bán, tặng, airdrop...),

    - Khóa một phần token (vesting),

    - Đưa lên sàn giao dịch,

    - Hoặc burn (đốt bớt token) nếu muốn.



* Note: Vì trong contract dùng openzipplin nên cần flat token trước khi verify hoặc phải import cả src của openzipplin lên bsc verifying 

