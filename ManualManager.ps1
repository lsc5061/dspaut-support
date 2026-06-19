Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$form = New-Object Windows.Forms.Form
$form.Text = "DSPAUT Manual Sync Tool"
$form.Size = New-Object Drawing.Size(400, 220)
$form.StartPosition = "CenterScreen"
$form.BackColor = [System.Drawing.Color]::White
$form.FormBorderStyle = "FixedDialog"
$form.MaximizeBox = $false

$label = New-Object Windows.Forms.Label
$label.Text = "Manual Synchronization Utility"
$label.Font = New-Object System.Drawing.Font("Arial", 12, [System.Drawing.FontStyle]::Bold)
$label.Location = New-Object Drawing.Point(30, 20)
$label.Size = New-Object Drawing.Size(340, 30)
$form.Controls.Add($label)

$info = New-Object Windows.Forms.Label
$info.Text = "This will sync 06_Manual to the website project."
$info.Location = New-Object Drawing.Point(30, 55)
$info.Size = New-Object Drawing.Size(340, 20)
$form.Controls.Add($info)

$btn = New-Object Windows.Forms.Button
$btn.Text = "Start Sync"
$btn.Size = New-Object Drawing.Size(150, 40)
$btn.Location = New-Object Drawing.Point(30, 90)
$btn.BackColor = [System.Drawing.Color]::LightBlue
$btn.Add_Click({
    $btn.Enabled = $false
    $btn.Text = "Processing..."
    
    # Run sync in the background
    $script = {
        Set-Location "e:\DS_LSC\dsvault\Marketing\08. Sub Website\dspaut-support"
        cmd /c npm run sync
    }
    
    $job = Start-Job -ScriptBlock $script
    Wait-Job $job
    $result = Receive-Job $job
    
    $btn.Enabled = $true
    $btn.Text = "Start Sync"
    [Windows.Forms.MessageBox]::Show("Synchronization Completed Successfully!", "Done")
})
$form.Controls.Add($btn)

$closeBtn = New-Object Windows.Forms.Button
$closeBtn.Text = "Close"
$closeBtn.Size = New-Object Drawing.Size(150, 40)
$closeBtn.Location = New-Object Drawing.Point(200, 90)
$closeBtn.Add_Click({ $form.Close() })
$form.Controls.Add($closeBtn)

$form.ShowDialog()
