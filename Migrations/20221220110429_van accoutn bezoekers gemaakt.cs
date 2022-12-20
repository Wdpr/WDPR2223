using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wdpr.Migrations
{
    /// <inheritdoc />
    public partial class vanaccoutnbezoekersgemaakt : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Naam",
                table: "AspNetUsers",
                newName: "Intresse");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Intresse",
                table: "AspNetUsers",
                newName: "Naam");
        }
    }
}
