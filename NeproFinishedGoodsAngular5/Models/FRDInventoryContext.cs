using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FRDInventory.Models
{
    public partial class FRDInventoryContext : DbContext
    {
        public FRDInventoryContext()
        {
        }

        public FRDInventoryContext(DbContextOptions<FRDInventoryContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblUserLogin> TblUserLogin { get; set; }
        public virtual DbSet<GetUserData> GetUserData { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=10.10.10.53;Database=FRDInventory;User ID=sa;Password=frd@amy210;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<TblUserLogin>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("tblUserLogin");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.CreatedById)
                    .HasColumnName("CreatedByID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedByName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("smalldatetime");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.InventoryController).HasMaxLength(100);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PasswordKey)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Receiver).HasMaxLength(100);

                entity.Property(e => e.StorePicker).HasMaxLength(100);

                entity.Property(e => e.UpdatedById)
                    .HasColumnName("UpdatedByID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UpdatedByName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UpdatedOn).HasColumnType("smalldatetime");

                entity.Property(e => e.UserName).HasMaxLength(250);

                entity.Property(e => e.UserRole)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
