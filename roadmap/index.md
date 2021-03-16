### Chapter 1: Starting with Linux 3

- [x] Understanding What Linux Is 
- [x] Understanding How Linux Differs from Other Operating Systems 
- [x] Exploring Linux History 
- [x] Free-flowing UNIX culture at Bell Labs 
- [x] Commercial UNIX 
- [x] GNU transitions UNIX to freedom 
- [x] BSD loses some steam 
- [x] Linus builds the missing piece 
- [x] OSI open source definition
- [x] Understanding How Linux Distributions Emerged 
- [x] Choosing a Red Hat distribution
- [x] Choosing Ubuntu or another Debian distribution 
- [x] inding Professional Opportunities with Linux Today 
- [x] Understanding how companies make money with Linux 
- [x] Becoming Red Hat certified

### Chapter 2: Creating the Perfect Linux Desktop 27
Understanding Linux Desktop Technology 28
Starting with the Fedora GNOME Desktop Live image 30

Using the GNOME 3 Desktop 31

After the computer boots up 31

Setting up the GNOME 3 desktop 38

Extending the GNOME 3 desktop 39

Starting with desktop applications 41

Stopping the GNOME 3 desktop 46

Using the GNOME 2 Desktop 46

Using the Metacity window manager 48

Changing GNOME’s appearance 49

Using the GNOME panels 50

Adding 3D effects with AIGLX 54

Summary 57

Exercises 57

Part II: Becoming a Linux Power User 59

### Chapter 3: Using the Shell 61

About Shells and Terminal Windows 62

Using the shell prompt 63

Using a Terminal window 63

Using virtual consoles 65

Choosing Your Shell 65

Running Commands 66

Understanding command syntax 67

Locating commands 70

Recalling Commands Using Command History 72

Command-line editing 73

Command-line completion 75

Command-line recall 76

Connecting and Expanding Commands 78

Piping between commands 78

Sequential commands 79

Background commands 79

Expanding commands 80

Expanding arithmetic expressions 80

Expanding variables 80

Using Shell Variables 81

Creating and using aliases 81

Exiting the shell 83

Creating Your Shell Environment 84

Configuring your shell 84

Setting your prompt 85

Adding environment variables 87

Getting Information about Commands 88

Summary 90

Exercises 90

### Chapter 4: Moving Around the Filesystem 93

Using Basic Filesystem Commands 96

Using Metacharacters and Operators 98

Using file-matching metacharacters 98

Using file-redirection metacharacters 99

Using brace expansion characters 101

Listing Files and Directories 101

Understanding File Permissions and Ownership 105

Changing permissions with chmod (numbers) 106

Changing permissions with chmod (letters) 107

Setting default file permission with umask 108

Changing file ownership 109

Moving, Copying, and Removing Files 109

Summary 111

Exercises 111

### Chapter 5: Working with Text Files 113

Editing Files with vim and vi 113

Starting with vi 115

Skipping around in the file 119

Searching for text 119

Using ex mode 120

Learning more about vi and vim 120

Finding Files 120

Using locate to find files by name 121

Searching for files with find 122

Searching in files with grep 128

Summary 129

Exercises 129

### Chapter 6: Managing Running Processes 131

Understanding Processes 131

Listing Processes 132

Listing processes with ps 132

Listing and changing processes with top 134

Listing processes with System Monitor 136

Managing Background and Foreground Processes 137

Starting background processes 138

Using foreground and background commands 139

Killing and Renicing Processes140

Killing processes with kill and killall 140

Setting processor priority with nice and renice 142

Limiting Processes with cgroups 143

Summary 144

Exercises 145

### Chapter 7: Writing Simple Shell Scripts 147

Understanding Shell Scripts 147

Executing and debugging shell scripts 148

Understanding shell variables 149

Performing arithmetic in shell scripts 152

Using programming constructs in shell scripts 153

Trying some useful text manipulation programs 159

Using simple shell scripts 161

Summary 163

Exercises 163

Part III: Becoming a Linux System Administrator 165

### Chapter 8: Learning System Administration 167

Understanding System Administration 167

Using Graphical Administration Tools 169

Using the root User Account 174

Exploring Administrative Commands, Configuration Files, and Log Files 178

Administrative commands 178

Administrative configuration files 179

Using Other Administrative Accounts 185

Checking and Configuring Hardware 186

Checking your hardware 187

Managing removable hardware 189

Working with loadable modules 191

Summary 193

Exercises 193

### Chapter 9: Installing Linux 195

Choosing a Computer 196

Installing Fedora from Live Media 198

Installing Red Hat Enterprise Linux from Installation Media 201

Understanding Cloud-Based Installations 204

Installing Linux in the Enterprise 205

Exploring Common Installation Topics 207

Upgrading or installing from scratch 207

Dual booting 208

Installing Linux to run virtually 209

Using installation boot options 210

Using specialized storage 213

Partitioning hard drives 214

Using the GRUB boot loader 217

Summary 219

Exercises 219

### Chapter 10: Getting and Managing Software 221

Managing Software on the Desktop 221

Going Beyond the Software Window 223

Understanding Linux RPM and DEB Software Packaging 224

Understanding DEB packaging 225

Understanding RPM packaging 226

Managing RPM Packages with YUM 229

Transitioning from yum to dnf 229

Understanding how yum works 229

Using YUM with third-party software repositories 233

Managing software with the yum command 233

Installing, Querying, and Verifying Software with the rpm Command 241

Installing and removing packages with rpm 241

Querying rpm information 242

Verifying RPM packages 244

Managing Software in the Enterprise 245

Summary 246

Exercises 247

### Chapter 11: Managing User Accounts 249

Creating User Accounts 249

Adding users with useradd 252

Setting user defaults 255

Modifying users with usermod 257

Deleting users with userdel 258

Understanding Group Accounts 259

Using group accounts 259

Creating group accounts 260

Managing Users in the Enterprise 261

Setting permissions with Access Control Lists 262

Centralizing User Accounts 269

Summary 270

Exercises 270

### Chapter 12: Managing Disks and Filesystems 273

Understanding Disk Storage 273

Partitioning Hard Disks 275

Understanding partition tables 275

Viewing disk partitions 276

Creating a single-partition disk 277

Creating a multiple-partition disk 281

Using Logical Volume Manager Partitions 285

Checking an existing LVM 286

Creating LVM logical volumes 289

Growing LVM logical volumes 290

Mounting Filesystems 291

Supported filesystems 291

Enabling swap areas 293

Disabling swap area 294

Using the fstab file to define mountable file systems 295

Using the mount command to mount file systems 297

Mounting a disk image in loopback 298

Using the umount command 299

Using the mkfs Command to Create a Filesystem 300

Managing Storage with Cockpit 301

Summary 303

Exercises 303

Part IV: Becoming a Linux Server Administrator 305

### Chapter 13: Understanding Server Administration 307

Starting with Server Administration 308

Step 1: Install the server 308

Step 2: Configure the server 310

Step 3: Start the server 311

Step 4: Secure the server 312

Step 5: Monitor the server 314

Checking and Setting Servers 316

Managing Remote Access with the Secure Shell Service 316

Starting the openssh-server service 317

Using SSH client tools 318

Using key-based (passwordless) authentication 324

Configuring System Logging 326

Enabling system logging with rsyslog 326

Watching logs with logwatch 331

Checking System Resources with sar 332

Checking System Space 334

Displaying system space with df 334

Checking disk usage with du 334

Finding disk consumption with find 335

Managing Servers in the Enterprise 336

Summary 336

Exercises 337

### Chapter 14: Administering Networking 339

Configuring Networking for Desktops 340

Checking your network interfaces 342

Configuring network interfaces 349

Configuring a network proxy connection 352

Configuring Networking from the Command Line 353

Configure networking with nmtui 354

Editing a NetworkManager TUI connection 354

Understanding networking configuration files 355

Setting alias network interfaces 360

Setting up Ethernet channel bonding 361

Setting custom routes 363

Configuring Networking in the Enterprise 364

Configuring Linux as a router 364

Configuring Linux as a DHCP server 365

Configuring Linux as a DNS server 365

Configuring Linux as a proxy server 366

Summary 366

Exercises 367

### Chapter 15: Starting and Stopping Services 369

Understanding the Initialization Daemon (init or systemd) 370

Understanding the classic init daemons 371

Understanding systemd initialization 377

Checking the Status of Services 384

Checking services for SysVinit systems 385

Stopping and Starting Services 387

Stopping and starting SysVinit services 387

Enabling Persistent Services 391

Configuring persistent services for SysVinit 391

Configuring a Default Runlevel or Target Unit 394

Configuring the SysVinit default runlevel 394

Adding New or Customized Services 396

Adding new services to SysVinit 396

Adding new services to systemd 399

Summary 401

Exercises 401

### Chapter 16: Configuring a Print Server 403

Common UNIX Printing System 403

Setting Up Printers 405

Adding a printer automatically 405

Using web-based CUPS administration 406

Using the Print Settings window 409

Working with CUPS Printing 415

Configuring the CUPS server (cupsdconf) 415

Starting the CUPS server 417

Configuring CUPS printer options manually 417

Using Printing Commands 418

Printing with lp 419

Listing status with lpstat -t 419

Removing print jobs with lprm 419

Configuring Print Servers 420

Configuring a shared CUPS printer 420

Configuring a shared Samba printer 422

Summary 424

Exercises 424

### Chapter 17: Configuring a Web Server 427

Understanding the Apache Web Server 427

Getting and Installing Your Web Server 428

Understanding the httpd package 428

Installing Apache 431

Starting Apache 432

Securing Apache 433

Understanding the Apache configuration files 435

Adding a virtual host to Apache 440

Allowing users to publish their own web content 442

Securing your web traffic with SSL/TLS 443

Troubleshooting Your Web Server 449

Checking for configuration errors 449

Accessing forbidden and server internal errors 451

Summary 453

Exercises 453

### Chapter 18: Configuring an FTP Server 455

Understanding FTP 455

Installing the vsftpd FTP Server 457

Starting the vsftpd Service 458

Securing Your FTP Server 461

Opening up your firewall for FTP 461

Configuring SELinux for your FTP server 463

Relating Linux file permissions to vsftpd 465

Configuring Your FTP Server 465

Setting up user access 465

Allowing uploading 467

Setting up vsftpd for the Internet 468

Using FTP Clients to Connect to Your Server 469

Accessing an FTP server from Firefox 470

Accessing an FTP server with the lftp command 470

Using the gFTP client 472

Summary 473

Exercises 473

### Chapter 19: Configuring a Windows File Sharing (Samba) Server 475

Understanding Samba 475

Installing Samba 476

Starting and Stopping Samba 478

Starting the Samba (smb) service 478

Starting the NetBIOS (nmbd) name server 480

Stopping the Samba (smb) and NetBIOS (nmb) services 481

Securing Samba 482

Configuring firewalls for Samba 482

Configuring SELinux for Samba 484

Configuring Samba host/user permissions 486

Configuring Samba 486

Configuring the [global] section 486

Configuring the [homes] section487

Configuring the [printers] section 489

Accessing Samba Shares 493

Accessing Samba shares in Linux 493

Accessing Samba shares in Windows 496

Using Samba in the Enterprise 497

Summary 497

Exercises 498

### Chapter 20: Configuring an NFS File Server 499

Installing an NFS Server 502

Starting the NFS service 502

Sharing NFS Filesystems 503

Configuring the /etc/exports file 504

Exporting the shared filesystems 507

Securing Your NFS Server 508

Opening up your firewall for NFS 508

Allowing NFS access in TCP wrappers 510

Configuring SELinux for your NFS server 511

Using NFS Filesystems 512

Viewing NFS shares 512

Manually mounting an NFS filesystem 512

Mounting an NFS filesystem at boot time 513

Using autofs to mount NFS filesystems on demand 517

Unmounting NFS filesystems 520

Summary 521

Exercises 521

### Chapter 21: Troubleshooting Linux 523

Boot-Up Troubleshooting 523

Understanding Startup Methods 524

Starting from the firmware (BIOS or UEFI) 526

Troubleshooting the GRUB boot loader 528

GRUB 2 Boot loader 530

Starting the kernel 532

Troubleshooting Software Packages 542

Fixing RPM databases and cache 545

Troubleshooting Networking 547

Troubleshooting outgoing connections 547

Troubleshooting incoming connections 550

Troubleshooting Memory 553

Uncovering memory issues 554

Troubleshooting in Rescue Mode 559

Summary 561

Exercises 561

Part V: Learning Linux Security Techniques 563

### Chapter 22: Understanding Basic Linux Security 565

Implementing Physical Security 565

Implementing disaster recovery 566

Securing user accounts 566

Securing passwords 570

Securing the filesystem 576

Managing software and services 579

Advanced implementation 580

Monitoring Your Systems 580

Monitoring log files 581

Monitoring user accounts 584

Monitoring the filesystem 587

Auditing and Reviewing Linux 595

Conducting compliance reviews 595

Conducting security reviews 596

Summary 596

Exercises 597

### Chapter 23: Understanding Advanced Linux Security 599

Implementing Linux Security with Cryptography 599

Understanding hashing 600

Understanding encryption/decryption 602

Implementing Linux cryptography 610

Implementing Linux Security with PAM 618

Understanding the PAM authentication process 619

Administering PAM on your Linux system 622

Obtaining more information on PAM 633

Summary 633

Exercises 633

### Chapter 24: Enhancing Linux Security with SELinux 635

Understanding SELinux Benefits 635

Understanding How SELinux Works 637

Understanding Type Enforcement 637

Understanding Multi-Level Security 638

Implementing SELinux security models 639

Configuring SELinux 645

Setting the SELinux mode 645

Setting the SELinux policy type 647

Managing SELinux security contexts 648

Managing SELinux policy rule packages 651

Managing SELinux via Booleans 653

Monitoring and Troubleshooting SELinux 654

Understanding SELinux logging 654

Troubleshooting SELinux logging 656

Troubleshooting common SELinux problems 657

Putting It All Together 659

Obtaining More Information on SELinux 659

Summary 660

Exercises 660

### Chapter 25: Securing Linux on a Network 663

Auditing Network Services 663

Evaluating access to network services with nmap 665

Using nmap to audit your network services advertisements 668

Working with Firewalls 672

Understanding firewalls 673

Implementing firewalls 674

Summary 688

Exercises 688

Part VI: Engaging with Cloud Computing 691

### Chapter 26: Shifting to Clouds and Containers 693

Understanding Linux Containers 694

Namespaces 695

Container registries 695

Base images and layers 696

Starting with Linux Containers 697

Pulling and running containers 697

Starting and stopping containers 701

Building a container image 702

Tagging and pushing an image to a registry 705

Using containers in the enterprise 706

Summary 706

Exercises 707

### Chapter 27: Using Linux for Cloud Computing 709

Overview of Linux and Cloud Computing 710

Trying Basic Cloud Technology 713

Setting Up a Small Cloud 714

Configuring hypervisors 715

Configuring storage 718

Creating virtual machines 720

Managing virtual machines 724

Migrating virtual machines 725

Summary 727

Exercises 727

### Chapter 28: Deploying Linux to the Cloud 729

Getting Linux to Run in a Cloud 729

Creating Linux Images for Clouds 731

Configuring and running a cloud-init cloud instance 731

Investigating the cloud instance 733

Cloning the cloud instance 734

Using cloud-init in enterprise computing 738

Using OpenStack to Deploy Cloud Images 739

Starting from the OpenStack Dashboard 739

Using Amazon EC2 to Deploy Cloud Images 744

Summary 746

Exercises 746

### Chapter 29: Automating Apps and Infrastructure with Ansible 749

Understanding Ansible 750

Exploring Ansible Components 751

Inventories 751

Playbooks 752

Stepping Through an Ansible Deployment 753

Installing Ansible 756

Running Ad-Hoc Ansible Commands 760

Automating Tasks with Ansible Tower Automation Framework 762

Summary 763

Exercises 763

### Chapter 30: Deploying Applications as Containers with Kubernetes 765

Understanding Kubernetes 766

Kubernetes masters 766

Kubernetes workers 767

Kubernetes applications 767

Kubernetes interfaces 768

Trying Kubernetes 768

Getting Kubernetes 769

Running the Kubernetes Basics tutorial 771

Enterprise-Quality Kubernetes with OpenShift 782

Summary 783

Exercises 783